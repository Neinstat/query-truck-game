/**
 * The truck's radio (GAME_DESIGN.md §7): music made on the fly with the Web Audio API — no audio
 * files, no licences. Each station is a small generator: a chord progression, a bass line, a
 * light drum pattern and a melody picked from the chord's notes, slightly different every bar,
 * played through a little speaker (band-limited, like a real radio). Aim at the radio and press
 * E to change the station; the last one is "off".
 */

export type StationId = 'lofi' | 'bossa' | 'chip' | 'off';

export type Station = { id: StationId; name: string; bpm: number };

export const STATIONS: readonly Station[] = [
  { id: 'lofi', name: 'Lo-fi 88.1', bpm: 78 },
  { id: 'bossa', name: 'Café Bossa 94.5', bpm: 112 },
  { id: 'chip', name: 'Pixel Pop 101.3', bpm: 118 },
  { id: 'off', name: 'Off', bpm: 0 },
];

/** Note number (MIDI) → frequency. */
const hz = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

/** Chords as MIDI notes, four bars each round. */
const PROGRESSIONS: Record<Exclude<StationId, 'off'>, number[][]> = {
  // Dm9 – G13 – Cmaj9 – Am9: a warm ii–V–I–vi.
  lofi: [
    [50, 53, 57, 60, 64],
    [43, 53, 57, 59, 64],
    [48, 52, 55, 59, 62],
    [45, 52, 55, 60, 64],
  ],
  // Cmaj7 – A7 – Dm7 – G7.
  bossa: [
    [48, 52, 55, 59],
    [45, 49, 52, 55],
    [50, 53, 57, 60],
    [43, 50, 53, 59],
  ],
  // C – G – Am – F, bright and simple.
  chip: [
    [48, 60, 64, 67],
    [43, 59, 62, 67],
    [45, 60, 64, 69],
    [41, 60, 65, 69],
  ],
};

export class Radio {
  private station = 0;
  private out: GainNode;
  private speaker: BiquadFilterNode;
  private noise: AudioBuffer;
  private timer = 0;
  /** The next sixteenth note to schedule, and when it plays. */
  private step = 0;
  private nextTime = 0;

  constructor(
    private readonly ctx: AudioContext,
    destination: AudioNode,
    noise: AudioBuffer,
  ) {
    this.noise = noise;
    this.out = ctx.createGain();
    this.out.gain.value = 0.32;
    // A small speaker: no deep bass, no airy highs.
    const low = ctx.createBiquadFilter();
    low.type = 'highpass';
    low.frequency.value = 90;
    this.speaker = ctx.createBiquadFilter();
    this.speaker.type = 'lowpass';
    this.speaker.frequency.value = 5200;
    this.out.connect(low).connect(this.speaker).connect(destination);
    this.start();
  }

  get current(): Station {
    return STATIONS[this.station];
  }

  /** Turn to a station by id (e.g. the one saved last time). */
  tune(id: StationId): void {
    const i = STATIONS.findIndex((s) => s.id === id);
    if (i >= 0) this.station = i;
    this.restart();
  }

  /** The next station (after the last music station comes "off", then the first again). */
  next(): Station {
    this.station = (this.station + 1) % STATIONS.length;
    this.static();
    this.restart();
    return this.current;
  }

  private restart(): void {
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.35;
  }

  private start(): void {
    this.restart();
    // Look ahead a little and schedule every note that falls in the next 0.25 s.
    this.timer = window.setInterval(() => {
      const s = this.current;
      if (s.id === 'off') return;
      const sixteenth = 60 / s.bpm / 4;
      while (this.nextTime < this.ctx.currentTime + 0.25) {
        this.playStep(s.id, this.step, this.nextTime, sixteenth);
        this.step++;
        this.nextTime += sixteenth;
      }
    }, 60);
  }

  stop(): void {
    window.clearInterval(this.timer);
  }

  /** A burst of radio static between stations. */
  private static(): void {
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const band = this.ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 2500;
    band.Q.value = 0.8;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    src.connect(band).connect(g).connect(this.speaker);
    src.start(t, Math.random() * 1);
    src.stop(t + 0.32);
  }

  private playStep(id: Exclude<StationId, 'off'>, step: number, t: number, sixteenth: number): void {
    const bar = Math.floor(step / 16);
    const pos = step % 16;
    const chord = PROGRESSIONS[id][bar % 4];
    // A random number that is the same for this step every round of four bars ±, so the tune
    // repeats a little but never exactly.
    const r = (k: number) => {
      const x = Math.sin((step % 64) * 12.9898 + k * 78.233 + Math.floor(bar / 8) * 3.1) * 43758.5453;
      return x - Math.floor(x);
    };
    // A lazy swing on the off-beats.
    const swing = id === 'lofi' && pos % 2 === 1 ? sixteenth * 0.28 : 0;
    const at = t + swing;

    if (id === 'lofi') {
      if (pos === 0) this.chord(chord.slice(1), at, sixteenth * 15, 'keys');
      if (pos === 0 || pos === 10) this.bass(chord[0] - 12, at, sixteenth * 5, 'sine');
      if (pos === 0 || pos === 7 || pos === 10) this.kick(at, 0.5);
      if (pos === 4 || pos === 12) this.snare(at, 0.18, 1800);
      if (pos % 2 === 0) this.hat(at, pos % 4 === 2 ? 0.05 : 0.03);
      if (pos % 4 === 2 && r(1) < 0.55) this.note(this.pick(chord, r(2)) + 12, at, sixteenth * 3, 'sine', 0.07);
      if (pos === 0 && bar % 2 === 0) this.crackle(at, sixteenth * 32);
    } else if (id === 'bossa') {
      // The bossa nova clave-ish comping: chord stabs on a syncopated pattern.
      if ([0, 3, 6, 10, 13].includes(pos)) this.chord(chord.slice(1), at, sixteenth * 2.2, 'guitar');
      if (pos === 0 || pos === 6) this.bass(chord[0] - 12, at, sixteenth * 5, 'triangle');
      if (pos === 8 || pos === 14) this.bass(chord[0] - 5, at, sixteenth * 3, 'triangle');
      if (pos % 2 === 0) this.hat(at, 0.025, 6000);
      if (pos === 0 || pos === 8) this.kick(at, 0.25);
      if (pos === 3 || pos === 10) this.snare(at, 0.06, 3500);
      if (pos % 4 === 0 && r(3) < 0.5) this.note(this.pick(chord, r(4)) + 24, at, sixteenth * 3.5, 'triangle', 0.05);
    } else {
      // Chiptune: an arpeggio, a square bass and a punchy beat.
      this.note(chord[1 + (pos % 3)] + 12 * (pos % 6 < 3 ? 1 : 2) - 12, at, sixteenth * 0.9, 'square', 0.025);
      if (pos % 4 === 0) this.bass(chord[0] - 12, at, sixteenth * 2, 'square');
      if (pos === 0 || pos === 8) this.kick(at, 0.45);
      if (pos === 4 || pos === 12) this.snare(at, 0.12, 2500);
      if (pos % 2 === 1) this.hat(at, 0.02, 8000);
      if (pos % 4 === 2 && r(5) < 0.6) this.note(this.pick(chord, r(6)) + 24, at, sixteenth * 1.8, 'square', 0.035);
    }
  }

  private pick(chord: number[], r: number): number {
    return chord[1 + Math.floor(r * (chord.length - 1))];
  }

  // ── Instruments ─────────────────────────────────────────────────────────────────────

  private envelope(t: number, length: number, volume: number, attack = 0.01): GainNode {
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(volume, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    g.connect(this.out);
    return g;
  }

  private note(n: number, t: number, length: number, type: OscillatorType, volume: number): void {
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = hz(n);
    osc.connect(this.envelope(t, length, volume));
    osc.start(t);
    osc.stop(t + length + 0.05);
  }

  /** Soft electric-piano chords (lo-fi) or nylon-guitar stabs (bossa). */
  private chord(notes: number[], t: number, length: number, kind: 'keys' | 'guitar'): void {
    for (const n of notes) {
      const g = this.envelope(t, length, kind === 'keys' ? 0.035 : 0.045, kind === 'keys' ? 0.04 : 0.005);
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = kind === 'keys' ? 1400 : 2600;
      filter.connect(g);
      for (const detune of kind === 'keys' ? [-6, 6] : [0]) {
        const osc = this.ctx.createOscillator();
        osc.type = kind === 'keys' ? 'triangle' : 'sawtooth';
        osc.frequency.value = hz(n);
        osc.detune.value = detune;
        osc.connect(filter);
        osc.start(t);
        osc.stop(t + length + 0.05);
      }
    }
  }

  private bass(n: number, t: number, length: number, type: OscillatorType): void {
    this.note(n, t, length, type, type === 'square' ? 0.04 : 0.14);
  }

  private kick(t: number, volume: number): void {
    const osc = this.ctx.createOscillator();
    osc.frequency.setValueAtTime(130, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    osc.connect(this.envelope(t, 0.22, volume, 0.003));
    osc.start(t);
    osc.stop(t + 0.25);
  }

  private noiseHit(t: number, length: number, volume: number, type: BiquadFilterType, freq: number): void {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    src.connect(filter).connect(this.envelope(t, length, volume, 0.002));
    src.start(t, Math.random() * (this.noise.duration - length - 0.05));
    src.stop(t + length + 0.02);
  }

  private snare(t: number, volume: number, freq: number): void {
    this.noiseHit(t, 0.16, volume, 'bandpass', freq);
  }

  private hat(t: number, volume: number, freq = 7000): void {
    this.noiseHit(t, 0.04, volume, 'highpass', freq);
  }

  /** Vinyl crackle under the lo-fi station. */
  private crackle(t: number, length: number): void {
    for (let i = 0; i < 10; i++) this.noiseHit(t + Math.random() * length, 0.01, 0.02 + Math.random() * 0.02, 'highpass', 3000);
  }
}
