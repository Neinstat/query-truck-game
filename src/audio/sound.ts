/**
 * Sound design (GAME_DESIGN.md §7): every sound is made in the browser with the Web Audio API —
 * no audio files, so nothing to license. Plain TypeScript (no React, no Three.js): the app plays
 * sounds when the game tells it something happened (through the bridge) or when the player acts.
 *
 * - Ambience: the city's low hum and the sounds of the day's place (birds in the park, wheels
 *   and clacks at the skatepark with traffic overhead, the school bell and a bouncing ball,
 *   waves and gulls at the harbour, a murmuring market and the fountain on the square); rain (a
 *   hiss, drops pattering on the truck's roof, and thunder in heavy rain), louder the harder it
 *   rains.
 * - The radio in the truck (radio.ts): music made on the fly — lo-fi, bossa nova, chiptune, or off.
 * - Effects: a customer arriving, a sale (the till), a right or wrong answer, a lesson card, the
 *   Manager's knock, the back door, footsteps, and soft clicks for menus.
 *
 * Browsers only start audio after the player clicks or presses a key, so `start()` is called
 * from the first click (the title screen's Start button). The volume and mute switch are saved.
 */

import type { PlaceId } from '../sql-core/truck/places';
import { Radio, STATIONS, type Station, type StationId } from './radio';

export type SoundEffect =
  | 'arrive'
  | 'sale'
  | 'correct'
  | 'wrong'
  | 'run'
  | 'knock'
  | 'door'
  | 'step'
  | 'click'
  | 'open'
  | 'close'
  | 'gaveUp'
  | 'lesson'
  | 'lens'
  | 'dayEnd';

const SETTINGS_KEY = 'query-truck.sound';

/** The sound groups with their own volume in the menu. */
export type Channel = 'music' | 'ambience' | 'effects';

type Settings = { volume: number; muted: boolean; station: StationId } & Record<Channel, number>;

const level = (v: unknown, fallback: number) => (typeof v === 'number' ? Math.min(1, Math.max(0, v)) : fallback);

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const s = JSON.parse(raw) as Partial<Settings>;
      return {
        volume: level(s.volume, 0.7),
        music: level(s.music, 0.7),
        ambience: level(s.ambience, 0.6),
        effects: level(s.effects, 0.8),
        muted: s.muted === true,
        station: STATIONS.some((st) => st.id === s.station) ? (s.station as StationId) : 'lofi',
      };
    }
  } catch {
    // Storage can be blocked (private windows): use the defaults.
  }
  return { volume: 0.7, muted: false, station: 'lofi', music: 0.7, ambience: 0.6, effects: 0.8 };
}

class SoundEngine {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfx!: GainNode;
  private ambience!: GainNode;
  private noise!: AudioBuffer;
  private brown!: AudioBuffer;
  private rainLow!: GainNode;
  private radio: Radio | null = null;
  private musicBus!: GainNode;
  private cityHum!: GainNode;
  private settings: Settings = loadSettings();
  private rain = 0;
  /** True while the game is paused (menus, consoles): the street is heard quieter, as if muffled. */
  private muffled = false;
  private muffle!: BiquadFilterNode;
  private timers: number[] = [];
  private place: PlaceId = 'park';
  /** A steady bed of sound for the place (waves, a crowd, traffic), faded by setPlace. */
  private bed!: GainNode;
  private bedFilter!: BiquadFilterNode;
  private listeners = new Set<() => void>();

  get volume(): number {
    return this.settings.volume;
  }

  get muted(): boolean {
    return this.settings.muted;
  }

  /** Called whenever the volume or mute switch changes (for the menu). */
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Start the audio (must follow a click or key press). Safe to call more than once. */
  start(): void {
    if (typeof window === 'undefined') return;
    if (this.ctx) {
      void this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.connect(ctx.destination);
    this.applyVolume();
    // A gentle limiter so many sounds at once never clip.
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -10;
    limiter.ratio.value = 6;
    limiter.connect(this.master);
    this.sfx = ctx.createGain();
    this.sfx.gain.value = 0.9 * this.settings.effects;
    this.sfx.connect(limiter);
    this.muffle = ctx.createBiquadFilter();
    this.muffle.type = 'lowpass';
    this.muffle.frequency.value = 18000;
    this.muffle.connect(limiter);
    this.ambience = ctx.createGain();
    this.ambience.gain.value = 0.8 * this.settings.ambience;
    this.ambience.connect(this.muffle);
    this.noise = this.makeNoise(2, false);
    this.brown = this.makeNoise(4, true);
    this.startAmbience();
    // The radio plays inside the truck: never muffled by menus.
    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = this.settings.music;
    this.musicBus.connect(limiter);
    this.radio = new Radio(ctx, this.musicBus, this.noise);
    this.radio.tune(this.settings.station);
  }

  /** The radio's station (the saved one until the audio has started). */
  get station(): Station {
    return this.radio?.current ?? STATIONS.find((s) => s.id === this.settings.station)!;
  }

  /** Turn the radio to the next station (the last one is off). */
  nextStation(): Station {
    this.start();
    const station = this.radio ? this.radio.next() : this.station;
    this.settings = { ...this.settings, station: station.id };
    this.saveAndApply();
    return station;
  }

  /** The volume of one group of sounds (0–1). */
  mix(channel: Channel): number {
    return this.settings[channel];
  }

  setMix(channel: Channel, value: number): void {
    this.settings = { ...this.settings, [channel]: level(value, 0.7) };
    if (this.ctx) {
      const t = this.ctx.currentTime;
      if (channel === 'music') this.musicBus.gain.setTargetAtTime(this.settings.music, t, 0.05);
      if (channel === 'effects') this.sfx.gain.setTargetAtTime(0.9 * this.settings.effects, t, 0.05);
      if (channel === 'ambience') this.ambience.gain.setTargetAtTime((this.muffled ? 0.5 : 0.8) * this.settings.ambience, t, 0.05);
    }
    this.saveAndApply();
  }

  setVolume(volume: number): void {
    this.settings = { ...this.settings, volume: Math.min(1, Math.max(0, volume)) };
    this.saveAndApply();
  }

  setMuted(muted: boolean): void {
    this.settings = { ...this.settings, muted };
    this.saveAndApply();
  }

  /** Where the truck parks today: changes the background sounds. */
  setPlace(place: PlaceId): void {
    this.place = place;
    this.applyBed();
  }

  private applyBed(): void {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    // Waves at the harbour, a crowd on the square, traffic under the overpass.
    const beds: Record<PlaceId, { gain: number; freq: number; q: number }> = {
      park: { gain: 0, freq: 400, q: 0.5 },
      skatepark: { gain: 0.22, freq: 180, q: 0.7 },
      school: { gain: 0, freq: 400, q: 0.5 },
      harbour: { gain: 0.3, freq: 500, q: 0.4 },
      square: { gain: 0.12, freq: 700, q: 1.2 },
    };
    const b = beds[this.place];
    this.bed.gain.setTargetAtTime(b.gain, t, 0.5);
    this.bedFilter.frequency.setTargetAtTime(b.freq, t, 0.5);
    this.bedFilter.Q.value = b.q;
  }

  /** How hard it rains (0–1), from the game. */
  setRain(amount: number): void {
    this.rain = Math.min(1, Math.max(0, amount));
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.rainLow.gain.setTargetAtTime(this.rain * 0.16, t, 1.2);
    // Rain covers part of the city's rumble.
    this.cityHum.gain.setTargetAtTime(0.1 * (1 - this.rain * 0.5), t, 1);
  }

  /** Menus and consoles muffle the street (and stop footsteps). */
  setMuffled(muffled: boolean): void {
    this.muffled = muffled;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.muffle.frequency.setTargetAtTime(muffled ? 700 : 18000, t, 0.15);
    this.ambience.gain.setTargetAtTime((muffled ? 0.5 : 0.8) * this.settings.ambience, t, 0.2);
  }

  play(effect: SoundEffect): void {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime + 0.005;
    switch (effect) {
      case 'arrive':
        // A soft two-note chime, like a shop door's sensor.
        this.tone(880, t, 0.5, 0.12, 'sine');
        this.tone(1318.5, t + 0.12, 0.6, 0.1, 'sine');
        break;
      case 'sale': {
        // The till: a bright bell, coins, and a drawer.
        this.tone(1567.98, t, 0.9, 0.16, 'triangle');
        this.tone(2349.3, t, 0.7, 0.07, 'sine');
        this.tone(3135.96, t + 0.02, 0.4, 0.04, 'sine');
        for (let i = 0; i < 6; i++) this.tone(3800 + Math.random() * 1800, t + 0.12 + i * 0.045, 0.12, 0.05, 'square');
        this.noiseBurst(t + 0.03, 0.12, 0.12, 'bandpass', 1500, 1.2);
        break;
      }
      case 'correct':
        // A rising synth arpeggio.
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone(f, t + i * 0.07, 0.35, 0.1, 'sawtooth', 2400));
        break;
      case 'wrong':
        // A low double buzz.
        this.tone(130.8, t, 0.18, 0.14, 'square', 900);
        this.tone(123.5, t + 0.2, 0.28, 0.14, 'square', 900);
        break;
      case 'run':
        // A short terminal blip when a query runs.
        this.tone(1200, t, 0.06, 0.05, 'square', 3000);
        this.tone(1800, t + 0.05, 0.05, 0.04, 'square', 3000);
        break;
      case 'knock':
        // Three knocks on the metal door, twice.
        for (const start of [0, 0.75]) {
          for (let i = 0; i < 3; i++) this.knock(t + start + i * 0.17);
        }
        break;
      case 'door':
        // The door's latch and a hydraulic hiss.
        this.noiseBurst(t, 0.05, 0.3, 'bandpass', 2200, 3);
        this.noiseBurst(t + 0.05, 0.5, 0.12, 'highpass', 3000, 0.7, true);
        this.tone(90, t, 0.25, 0.15, 'sine');
        break;
      case 'step':
        if (this.muffled) return;
        // Boots on the truck's metal floor.
        this.noiseBurst(t, 0.07, 0.09 + Math.random() * 0.03, 'lowpass', 500 + Math.random() * 200, 1);
        this.tone(70 + Math.random() * 15, t, 0.08, 0.08, 'sine');
        break;
      case 'click':
        this.tone(2200, t, 0.03, 0.05, 'square', 5000);
        break;
      case 'open':
        // The tablet wakes up.
        this.tone(660, t, 0.12, 0.07, 'sine');
        this.tone(990, t + 0.06, 0.18, 0.07, 'sine');
        break;
      case 'close':
        this.tone(990, t, 0.1, 0.06, 'sine');
        this.tone(660, t + 0.05, 0.14, 0.06, 'sine');
        break;
      case 'gaveUp':
        // A falling tone: someone walked away.
        this.slide(520, 260, t, 0.5, 0.1, 'triangle');
        break;
      case 'lesson':
        [392, 523.25, 659.25].forEach((f, i) => this.tone(f, t + i * 0.1, 0.6, 0.07, 'triangle'));
        break;
      case 'lens':
        // A digital sweep for the hologram.
        this.slide(300, 1600, t, 0.35, 0.06, 'sawtooth', 2600);
        this.noiseBurst(t, 0.35, 0.05, 'bandpass', 4000, 2, true);
        break;
      case 'dayEnd':
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => this.tone(f, t + i * 0.12, 1.2, 0.08, 'triangle'));
        break;
    }
  }

  /** Thunder after a lightning flash: a crack, then a long, low rumble. */
  thunder(): void {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime + 0.3 + Math.random() * 0.8;
    this.noiseBurst(t, 0.4, 0.15, 'lowpass', 900, 0.7, false, this.ambience);
    const src = ctx.createBufferSource();
    src.buffer = this.brown;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, t);
    filter.frequency.exponentialRampToValueAtTime(90, t + 4);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.45, t + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);
    src.connect(filter).connect(gain).connect(this.ambience);
    src.start(t);
    src.stop(t + 4.6);
  }

  // ── Ambience ─────────────────────────────────────────────────────────────────────────

  private startAmbience(): void {
    const ctx = this.ctx!;
    // The city: a very low, quiet rumble far away.
    this.cityHum = ctx.createGain();
    this.cityHum.gain.value = 0.1;
    this.cityHum.connect(this.ambience);
    const city = this.loop(this.brown);
    const cityFilter = ctx.createBiquadFilter();
    cityFilter.type = 'lowpass';
    cityFilter.frequency.value = 260;
    city.connect(cityFilter).connect(this.cityHum);

    // Rain: a soft, muffled patter heard through the truck's roof (no bright hiss), silent
    // until it rains; single drops on top come from roofDrops().
    this.rainLow = ctx.createGain();
    this.rainLow.gain.value = 0;
    this.rainLow.connect(this.ambience);
    const patter = this.loop(this.brown);
    const patterFilter = ctx.createBiquadFilter();
    patterFilter.type = 'lowpass';
    patterFilter.frequency.value = 750;
    patter.connect(patterFilter).connect(this.rainLow);

    // The place's steady bed of sound, with a slow swell (waves, a crowd breathing).
    this.bed = ctx.createGain();
    this.bed.gain.value = 0;
    this.bedFilter = ctx.createBiquadFilter();
    this.bedFilter.type = 'bandpass';
    const swell = ctx.createGain();
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.12;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.45;
    lfo.connect(lfoGain).connect(swell.gain);
    swell.gain.value = 0.6;
    lfo.start();
    this.loop(this.brown).connect(this.bedFilter).connect(swell).connect(this.bed).connect(this.ambience);
    this.applyBed();

    // Drops on the roof, the place's own sounds, a passing car or siren: scheduled at random.
    this.every(() => 70 + Math.random() * 120, () => this.roofDrops());
    this.every(() => 3000 + Math.random() * 6000, () => this.placeSound());
  }

  /** A few raindrops tapping the truck's roof (more the harder it rains). */
  private roofDrops(): void {
    if (this.rain <= 0.02 || !this.ctx) return;
    // Soft "plips": a tiny falling tone per drop, quiet and scattered left and right.
    const count = Math.random() < this.rain ? 1 + Math.floor(this.rain * 2) : 0;
    for (let i = 0; i < count; i++) {
      const t = this.ctx.currentTime + Math.random() * 0.08;
      const f = 1100 + Math.random() * 1300;
      this.slide(f, f * 0.55, t, 0.05, 0.008 + Math.random() * 0.012, 'sine', undefined, Math.random() * 1.4 - 0.7, this.ambience);
    }
  }

  /** Now and then, a sound that belongs to today's place (quieter in the rain). */
  private placeSound(): void {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    const dry = 1 - this.rain * 0.7;
    const r = Math.random();
    switch (this.place) {
      case 'park':
        if (r < 0.75 * dry) this.birds(t);
        else if (r < 0.85) this.flyBy();
        break;
      case 'school':
        if (r < 0.4 * dry) this.birds(t);
        else if (r < 0.75) this.ballBounces(t);
        else if (r < 0.8) this.schoolBell(t);
        break;
      case 'skatepark':
        if (r < 0.55) this.skate(t);
        else if (r < 0.85) this.flyBy();
        break;
      case 'harbour':
        if (r < 0.6 * dry) this.gull(t);
        else if (r < 0.7) this.shipHorn(t);
        break;
      case 'square':
        if (r < 0.35 * dry) this.birds(t);
        else if (r < 0.5) this.flyBy();
        break;
    }
  }

  /** A few quick chirps. */
  private birds(t: number): void {
    const base = 2600 + Math.random() * 1600;
    const pan = Math.random() * 1.6 - 0.8;
    for (let i = 0; i < 2 + Math.floor(Math.random() * 4); i++) {
      this.slide(base, base * (1.2 + Math.random() * 0.4), t + i * 0.13, 0.09, 0.025, 'sine', undefined, pan, this.ambience);
    }
  }

  /** Skateboard wheels rolling past, then the clack of a trick. */
  private skate(t: number): void {
    this.noiseBurst(t, 1.6, 0.07, 'bandpass', 350, 0.8, true, this.ambience);
    this.noiseBurst(t + 1.5, 0.05, 0.22, 'bandpass', 1600, 2, false, this.ambience);
    this.noiseBurst(t + 1.75, 0.06, 0.18, 'bandpass', 1200, 2, false, this.ambience);
  }

  /** A basketball bouncing a few times. */
  private ballBounces(t: number): void {
    for (let i = 0; i < 4; i++) {
      this.slide(160, 80, t + i * 0.42, 0.1, 0.09 - i * 0.012, 'sine', undefined, 0.3, this.ambience);
    }
  }

  /** The school bell, far off. */
  private schoolBell(t: number): void {
    for (let i = 0; i < 6; i++) this.slide(1046.5, 1040, t + i * 0.25, 0.22, 0.03, 'triangle', undefined, -0.4, this.ambience);
  }

  /** A gull's call: a few falling cries. */
  private gull(t: number): void {
    const pan = Math.random() * 1.6 - 0.8;
    for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
      this.slide(1500 + Math.random() * 300, 900, t + i * 0.28, 0.22, 0.035, 'sawtooth', 2200, pan, this.ambience);
    }
  }

  /** A ship's horn across the water. */
  private shipHorn(t: number): void {
    this.slide(110, 108, t, 2.2, 0.08, 'sawtooth', 380, -0.5, this.ambience);
    this.slide(138.6, 136, t, 2.2, 0.05, 'sawtooth', 380, -0.5, this.ambience);
  }

  /** A car or scooter passing by, panning from one side to the other. */
  private flyBy(): void {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    const length = 2.8 + Math.random() * 1.5;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 1.4;
    filter.frequency.setValueAtTime(500, t);
    filter.frequency.linearRampToValueAtTime(1400, t + length * 0.5);
    filter.frequency.linearRampToValueAtTime(380, t + length);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.13, t + length * 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + length);
    const pan = ctx.createStereoPanner();
    const from = Math.random() < 0.5 ? -1 : 1;
    pan.pan.setValueAtTime(from, t);
    pan.pan.linearRampToValueAtTime(-from, t + length);
    // A low engine whine under the whoosh.
    const engine = ctx.createOscillator();
    engine.type = 'sawtooth';
    engine.frequency.setValueAtTime(140, t);
    engine.frequency.linearRampToValueAtTime(190, t + length * 0.5);
    engine.frequency.linearRampToValueAtTime(110, t + length);
    const engineGain = ctx.createGain();
    engineGain.gain.value = 0.12;
    const engineFilter = ctx.createBiquadFilter();
    engineFilter.type = 'lowpass';
    engineFilter.frequency.value = 500;
    src.connect(filter).connect(gain);
    engine.connect(engineFilter).connect(engineGain).connect(gain);
    gain.connect(pan).connect(this.ambience);
    src.start(t);
    src.stop(t + length);
    engine.start(t);
    engine.stop(t + length);
  }

  // ── Building blocks ─────────────────────────────────────────────────────────────────

  private makeNoise(seconds: number, brown: boolean): AudioBuffer {
    const ctx = this.ctx!;
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      if (brown) {
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
      } else data[i] = white;
    }
    return buffer;
  }

  private loop(buffer: AudioBuffer): AudioBufferSourceNode {
    const src = this.ctx!.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.start();
    return src;
  }

  /** Run something again and again after a random wait. */
  private every(wait: () => number, run: () => void): void {
    const next = () => {
      this.timers.push(
        window.setTimeout(() => {
          run();
          next();
        }, wait()),
      );
    };
    next();
  }

  private tone(freq: number, t: number, length: number, volume: number, type: OscillatorType, lowpass?: number): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + length);
    let node: AudioNode = osc;
    if (lowpass) {
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = lowpass;
      node = osc.connect(filter);
    }
    node.connect(gain).connect(this.sfx);
    osc.start(t);
    osc.stop(t + length + 0.05);
  }

  private slide(
    from: number,
    to: number,
    t: number,
    length: number,
    volume: number,
    type: OscillatorType,
    lowpass?: number,
    pan = 0,
    out: AudioNode = this.sfx,
  ): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(from, t);
    osc.frequency.exponentialRampToValueAtTime(to, t + length);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + length);
    let node: AudioNode = osc;
    if (lowpass) {
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = lowpass;
      node = osc.connect(filter);
    }
    if (pan) {
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      node.connect(gain).connect(p).connect(out);
    } else node.connect(gain).connect(out);
    osc.start(t);
    osc.stop(t + length + 0.05);
  }

  private noiseBurst(
    t: number,
    length: number,
    volume: number,
    type: BiquadFilterType,
    freq: number,
    q: number,
    swell = false,
    out: AudioNode = this.sfx,
  ): void {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    filter.Q.value = q;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + (swell ? length * 0.4 : 0.004));
    gain.gain.exponentialRampToValueAtTime(0.0001, t + length);
    src.connect(filter).connect(gain).connect(out);
    // Start somewhere random in the noise, so bursts don't all sound the same.
    src.start(t, Math.random() * (this.noise.duration - length - 0.1));
    src.stop(t + length + 0.02);
  }

  private knock(t: number): void {
    this.tone(95, t, 0.16, 0.35, 'sine');
    this.tone(190, t, 0.08, 0.12, 'triangle');
    this.noiseBurst(t, 0.06, 0.25, 'lowpass', 900, 1);
  }

  private applyVolume(): void {
    if (!this.ctx) return;
    // A curve, so the slider's low end is still useful.
    const v = this.settings.muted ? 0 : Math.pow(this.settings.volume, 1.6);
    this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }

  private saveAndApply(): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    } catch {
      // Not saved (storage blocked): it still applies for this visit.
    }
    this.applyVolume();
    this.listeners.forEach((l) => l());
  }
}

/** The game's one sound engine. */
export const sound = new SoundEngine();
