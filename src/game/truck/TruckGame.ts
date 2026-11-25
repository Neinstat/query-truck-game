/**
 * The food truck (GAME_DESIGN.md §14.8), first person in 3D:
 * WASD to walk inside the truck, the mouse to look (pointer lock; dragging also works), and E or a
 * click to use what the crosshair is on. Talks to React only through the TruckBridge.
 */
import * as THREE from 'three';
import {
  arrivalTime,
  CLOSING,
  GAME_MINUTES_PER_SECOND,
  KNOCK_TIME,
  OPENING,
  PATIENCE_MINUTES,
  QUIET_SPEEDUP,
} from '../../sql-core/truck/day';
import type { CustomerLook } from '../../sql-core/truck/orders';
import { inkColour } from './colour';
import type { DevCommand, LensCard, TruckBridge } from './bridge';
import { TruckQueue, type QueueCustomer } from './queue';
import { alongPath, DineIn, stepAside, type Diner } from './dineIn';
import { filmAt, shotSpan } from './cinematic';
import { buildCustomer, buildManager, buildTruck, type CustomerModel } from './build';
import { buildPlace } from './scenery';
import { buildExterior } from './exterior';
import { setTruckLook } from './look';
import { Rain } from './rain';
import { hashString, planShowers, rainAt, type Shower } from './weather';
import type { PlaceId } from '../../sql-core/truck/places';
import { LookPass } from './lookPass';
import { skyAt } from './sky';
import {
  aimedInteractable,
  CLOCK3D,
  rayBox,
  EYE_Y,
  FACING_TRUCK,
  GROUND_Y,
  LENS_SPOTS,
  lensPoint,
  lookAtAngles,
  lookDirection,
  queuePosition,
  TOUR_STOPS,
  START,
  TRUCK,
  walkStep,
  type InteractableId,
} from './world';

/** Around the wall clock's face, for "is the player looking at it?". */
const CLOCK_BOX = {
  min: { x: CLOCK3D.x - CLOCK3D.r, y: CLOCK3D.y - CLOCK3D.r, z: CLOCK3D.z - 0.06 },
  max: { x: CLOCK3D.x + CLOCK3D.r, y: CLOCK3D.y + CLOCK3D.r, z: CLOCK3D.z + 0.02 },
};
const lookingAt = (eye: { x: number; y: number; z: number }, dir: { x: number; y: number; z: number }, box: typeof CLOCK_BOX, reach: number) => {
  const t = rayBox(eye, dir, box);
  return t !== null && t <= reach;
};

/** The grey-blue a rainy sky turns towards. */
const RAIN_SKY = new THREE.Color(0.5, 0.55, 0.62);

/** Sharp on high-density screens, but never more than 2× (light on the GPU). */
const MAX_PIXEL_RATIO = 2;
const MOUSE_SENSITIVITY = 0.0024;
/** The camera's field of view: normally, zoomed in during the truck tour, and for the guide's pictures. */
const FOV = 70;
const TOUR_FOV = 50;
const PICTURE_FOV = 42;
const MAX_PITCH = 1.25;
/** Seconds for the Data Lens to dissolve in or out. */
const LENS_SECONDS = 0.45;
/** Cards further away than this (m) are hidden: the truck is small, the park is not. */
const LENS_MAX_DISTANCE = 6;

type Pose = { x: number; y: number; z: number; yaw: number; pitch: number };

/** A stop of the truck tour as a camera pose. */
function stopPose(object: InteractableId): Pose | null {
  const stop = TOUR_STOPS.find((s) => s.object === object);
  if (!stop) return null;
  return { ...stop.eye, ...lookAtAngles(stop.eye, stop.target) };
}

/** The shortest way from one angle to another. */
const angleStep = (from: number, to: number) => {
  const d = (((to - from + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return d;
};

/** One of today's customers: their order id, and how they look. */
export type DayCustomer = { id: string; look: CustomerLook };

export class TruckGame {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(FOV, 16 / 9, 0.05, 120);
  /** A dark veil just in front of the camera, for the title film's fades between shots. */
  private readonly veil = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 4),
    new THREE.MeshBasicMaterial({ color: '#1a2036', transparent: true, opacity: 0, depthTest: false, depthWrite: false, fog: false }),
  );
  /** The title film's view is pushed right, clear of the title card (0 = centred). */
  private filmOffset = 0;
  private readonly look = new LookPass();
  private readonly ambient = new THREE.AmbientLight(0xffffff, 0.8 * Math.PI);
  private readonly sun = new THREE.DirectionalLight(0xffffff, 0.4 * Math.PI);
  /** A warm light inside the truck that comes on as it gets dark. */
  private readonly inside = new THREE.PointLight(0xffd9a0, 0, 7, 1.2);
  private setSky: (sky: ReturnType<typeof skyAt>) => void = () => {};
  private updatePlace: (time: number, rain: number) => void = () => {};
  private readonly rain = new Rain();
  private showers: Shower[] = [];
  private rainAmount = 0;
  private lastWeather = -1;
  /** Seconds of real time since the game started (animations that run even while paused). */
  private time = 0;
  private flash = 0;
  private flashLight = 0;
  private nextThunder = 20;
  private lastStep = 0;
  // Developer mode (DevPanel): clock speed, forced rain, walking anywhere, and stats.
  private devSpeed = 1;
  private devRain: number | null = null;
  private devSpawn = false;
  private noclip = false;
  /** Developer ghost mode (see DevCommand 'ghost'): flying, and no duties. */
  private ghost = false;
  private ghostY = EYE_Y;
  private flying = { up: false, down: false };
  private statsOn = false;
  private panelOpen = false;
  private lookingAtClock = false;
  /** The title screen: the camera circles the truck outside. */
  private showcase = false;
  /** The film held on one shot (the backstory): where it starts, how long it is, and since when. */
  private filmPin: { start: number; seconds: number; since: number } | null = null;
  /** Where the truck parks today (its customers' route comes with it). */
  private place: PlaceId = 'park';
  private steam: THREE.Object3D[] = [];
  private setOpenSign: (open: boolean) => void = () => {};
  private signOpen = true;
  private statsClock = 0;
  private frames = 0;
  private lastSkyMinute = -1;
  private readonly observer: ResizeObserver;
  private readonly offs: (() => void)[] = [];
  private frame = 0;
  private last = 0;
  private destroyed = false;

  private yaw: number = START.yaw;
  private pitch = -0.12;
  private at = { x: START.x as number, z: START.z as number };
  private keys = { forward: false, back: false, left: false, right: false };
  private dragging = false;
  private paused = false;
  private aimed: InteractableId | null = null;

  private queue = new TruckQueue();
  private customers = new Map<QueueCustomer, CustomerModel>();
  /** Customers eating in (dineIn.ts), with their model and the cup on their table. */
  private dineIn = new DineIn('park');
  private diners = new Map<Diner, { model: CustomerModel; cup: THREE.Object3D | null }>();
  /** Served customers who have already decided whether to sit down. */
  private decided = new WeakSet<QueueCustomer>();
  private nextOrder = 0;
  private frontOrderId: string | null = null;
  /** The truck's clock: minutes since midnight. */
  private clock: number = OPENING;
  private lastClockMinute = -1;
  private lastPatience = '';
  private closed = false;
  private setWallClock: (minutes: number) => void = () => {};
  private setDoor: (open: number, knockTime?: number) => void = () => {};
  private manager!: THREE.Group;
  private managerDone = false;
  private knocking = false;
  private doorTarget = 0;
  private doorAmount = 0;
  private lastAnchor = '';
  private walkClock = 0;
  private lensOn = false;
  /**
   * The browser cannot capture the mouse at all here (e.g. an embedded preview): then moving the
   * mouse over the view looks around instead. Never used in a normal browser tab.
   */
  private lockUnavailable = typeof document !== 'undefined' && !('requestPointerLock' in HTMLElement.prototype);
  /**
   * The browser refused to capture the mouse (it does after Esc, which never counts as a click):
   * until the next click or key captures it, moving the mouse looks around anyway, with the
   * cursor hidden, so play feels the same.
   */
  private freeLook = false;
  private lensAmount = 0;
  private lastCards = '';
  /** The truck tour: where the camera is and where it is flying to (null: the player's own view). */
  private tourView: Pose | null = null;
  private tourTarget: Pose | null = null;
  private tourReturning = false;

  /** All of today's customers, in the order they arrive (their place sets their arrival time). */
  private readonly allOrders: readonly DayCustomer[];
  /** Today's orders still to come (orders already served or missed today are skipped). */
  private readonly orders: readonly DayCustomer[];

  constructor(
    private readonly parent: HTMLElement,
    private readonly bridge: TruckBridge,
    /** Today's customers, and where the day stands on load: orders already handled, and the clock. */
    start: {
      orders: readonly DayCustomer[];
      handled: readonly string[];
      clock: number;
      managerDone?: boolean;
      /** Where the truck parks today (sql-core/truck/places.ts). */
      place?: PlaceId;
      /** Make it rain today whatever the day's weather (`?rain` in the address, for testing). */
      forceRain?: boolean;
      /** What the player's upgrades make the truck look like (7.2). */
      look?: { paint?: string; awning?: string; machine?: 0 | 1 | 2 };
    },
  ) {
    setTruckLook(start.look);
    this.managerDone = start.managerDone ?? false;
    this.allOrders = start.orders;
    this.orders = start.orders.filter((o) => !start.handled.includes(o.id));
    this.clock = Math.max(OPENING, start.clock);
    // The day's weather comes from its orders, so a reload brings the same showers.
    this.showers = planShowers(hashString(start.orders.map((o) => o.id).join('|')), start.forceRain);
    // Colours are used exactly as written (colour.ts); no conversion on output either.
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO));
    this.renderer.domElement.className = 'truck-canvas';
    // Count every pass of a frame together (the developer panel shows draw calls).
    this.renderer.info.autoReset = false;
    parent.appendChild(this.renderer.domElement);

    this.scene.background = inkColour('peach');
    this.scene.fog = new THREE.Fog(inkColour('lilac'), 18, 80);
    // Neutral light so every colour stays itself at full light; the sky (sky.ts) changes the
    // light's colour and strength over the day. (Three.js lights are physical: × π gives a
    // surface its own colour at full light.)
    this.scene.add(this.ambient, this.sun);
    // The fade veil rides in front of the camera (so the camera joins the scene).
    this.veil.position.z = -0.1;
    this.veil.renderOrder = 999;
    this.veil.frustumCulled = false;
    this.camera.add(this.veil);
    this.scene.add(this.camera);
    const fill = new THREE.DirectionalLight(0xffffff, 0.15 * Math.PI);
    fill.position.set(3, 4, 8);
    this.scene.add(fill);
    this.inside.position.set(0, TRUCK.height - 0.15, 0);
    this.scene.add(this.inside);
    const truck = buildTruck();
    this.setWallClock = truck.userData.setClock as (minutes: number) => void;
    this.setWallClock(this.clock);
    this.setDoor = truck.userData.setDoor as (open: number, knockTime?: number) => void;
    // The Manager waits on the step outside the back door, facing in (−x); seen when it opens.
    this.manager = buildManager();
    this.manager.position.set(TRUCK.length / 2 + 0.42, 0, 0.05);
    this.manager.rotation.y = Math.PI / 2;
    this.manager.visible = false;
    this.place = start.place ?? 'park';
    this.dineIn = new DineIn(this.place);
    const place = buildPlace(this.place);
    this.setSky = place.userData.setSky as typeof this.setSky;
    this.updatePlace = place.userData.update as typeof this.updatePlace;
    const exterior = buildExterior();
    this.steam = (exterior.userData.steam as THREE.Object3D[]) ?? [];
    this.setOpenSign = (exterior.userData.setOpen as (open: boolean) => void) ?? (() => {});
    this.scene.add(truck, exterior, place, this.manager, this.rain.group);
    this.applySky();

    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(parent);
    this.resize();
    this.bindInput();

    this.offs.push(
      bridge.on('serve', () => this.queue.serveFront()),
      bridge.on('pause', (paused) => this.setPaused(paused)),
      bridge.on('lens', (on) => {
        // The mouse stays captured with the lens on (no cursor): aim at an object and press E to
        // open its tables, as always.
        this.lensOn = on;
      }),
      bridge.on('door', (open) => (this.doorTarget = open ? 1 : 0)),
      bridge.on('tour', (object) => this.setTour(object)),
      bridge.on('snapshotRequest', () => this.bridge.emit('snapshots', this.snapshots())),
      // Back to playing from a menu: capture the mouse again (called from a click, so allowed).
      bridge.on('lock', () => this.lockMouse()),
      bridge.on('dev', (c) => this.devCommand(c)),
      bridge.on('showcase', (on) => (this.showcase = on)),
      bridge.on('filmShot', (name) => {
        const span = name ? shotSpan(name) : null;
        this.filmPin = span ? { ...span, since: this.time } : null;
      }),
      bridge.on('managerDone', () => {
        this.managerDone = true;
        this.knocking = false;
      }),
    );
    // The app may have stopped time before the game existed (e.g. the title screen is open).
    this.paused = bridge.last('pause') ?? false;
    this.lensOn = bridge.last('lens') ?? false;
    this.loop(performance.now());
  }

  // ── Setup ────────────────────────────────────────────────────────────────────────────

  /** Shifts the picture right by a share of the width (the title card covers the left). */
  private setFilmOffset(share: number, force = false): void {
    if (share === this.filmOffset && !force) return;
    this.filmOffset = share;
    const w = Math.max(1, this.parent.clientWidth);
    const h = Math.max(1, this.parent.clientHeight);
    if (share === 0) this.camera.clearViewOffset();
    else this.camera.setViewOffset(w, h, -share * w, 0, w, h);
  }

  private resize(): void {
    const w = Math.max(1, this.parent.clientWidth);
    const h = Math.max(1, this.parent.clientHeight);
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / h;
    this.setFilmOffset(this.filmOffset, true);
    this.camera.updateProjectionMatrix();
    const ratio = this.renderer.getPixelRatio();
    this.look.setSize(Math.round(w * ratio), Math.round(h * ratio), ratio);
  }

  private bindInput(): void {
    const canvas = this.renderer.domElement;
    const keyMap: Record<string, keyof TruckGame['keys']> = {
      KeyW: 'forward',
      ArrowUp: 'forward',
      KeyS: 'back',
      ArrowDown: 'back',
      KeyA: 'left',
      ArrowLeft: 'left',
      KeyD: 'right',
      ArrowRight: 'right',
    };
    const onKey = (down: boolean) => (e: KeyboardEvent) => {
      if (this.paused || this.panelOpen) return;
      // Any key but Esc counts as the player's action: capture the mouse again if it is free.
      if (down && e.code !== 'Escape' && !this.lockUnavailable && document.pointerLockElement !== canvas) this.lockMouse();
      const key = keyMap[e.code];
      if (key) {
        this.keys[key] = down;
        e.preventDefault();
      } else if (this.ghost && (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
        this.flying[e.code === 'Space' ? 'up' : 'down'] = down;
        e.preventDefault();
      } else if (down && e.code === 'KeyE' && !this.ghost) {
        this.use();
      } else if (down && e.code === 'KeyL' && !e.repeat) {
        this.bridge.emit('lensKey', true);
      }
    };
    const keydown = onKey(true);
    const keyup = onKey(false);
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);

    const onMove = (e: MouseEvent) => {
      if (this.paused || this.panelOpen) return;
      // Captured mouse, dragging, or — only where the mouse can't be captured at all — simply
      // moving the mouse over the view.
      const free = (this.lockUnavailable && e.target === canvas) || this.freeLook;
      if (document.pointerLockElement === canvas || this.dragging || free) {
        this.yaw -= e.movementX * MOUSE_SENSITIVITY;
        this.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, this.pitch - e.movementY * MOUSE_SENSITIVITY));
      }
    };
    const onDown = (e: MouseEvent) => {
      if (this.paused || this.panelOpen) return;
      if (document.pointerLockElement === canvas) {
        this.use();
        return;
      }
      // The mouse is free (e.g. Esc closed a menu): the click captures the mouse again, and does
      // not use anything. Only where the mouse can't be captured at all does a click drag-look
      // and use what is aimed at.
      e.preventDefault();
      if (!this.lockUnavailable) {
        this.lockMouse();
        return;
      }
      this.dragging = true;
      this.use();
    };
    const onUp = () => (this.dragging = false);
    const onLockChange = () => {
      const locked = document.pointerLockElement === canvas;
      if (locked) this.setFreeLook(false);
      // A capture that was still on its way when a console or menu opened: let the mouse go
      // again, so the cursor is there to use the console (no Esc needed).
      if (locked && this.paused) {
        document.exitPointerLock();
        return;
      }
      this.bridge.emit('locked', locked);
    };
    // Older browsers report a refused capture with an event instead of a rejected promise.
    const onLockError = () => {
      if (!this.lockUnavailable) this.lockRefused();
    };
    document.addEventListener('pointerlockerror', onLockError);
    canvas.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('pointerlockchange', onLockChange);
    this.offs.push(() => {
      window.removeEventListener('keydown', keydown);
      window.removeEventListener('keyup', keyup);
      canvas.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('pointerlockchange', onLockChange);
      document.removeEventListener('pointerlockerror', onLockError);
    });
  }

  /**
   * Capture the mouse for looking around. Browsers may refuse (e.g. right after Esc, or in an
   * embedded preview); then dragging still looks around and "click to look around" shows.
   */
  private lockMouse(): void {
    if (this.lockUnavailable || document.pointerLockElement === this.renderer.domElement) return;
    const failed = (error?: unknown) => {
      const name = error instanceof Error || error instanceof DOMException ? error.name : '';
      // Not possible here at all (embedded page): fall back to looking with the free mouse.
      if (name === 'WrongDocumentError' || name === 'NotSupportedError') this.lockUnavailable = true;
      // Refused this time (e.g. right after Esc): look around with the free mouse meanwhile.
      else this.lockRefused();
    };
    try {
      const result = this.renderer.domElement.requestPointerLock?.() as unknown;
      if (result instanceof Promise) result.catch(failed);
    } catch (error) {
      failed(error);
    }
  }

  /** The mouse could not be captured: look around with it anyway (cursor hidden) until it can. */
  private lockRefused(): void {
    if (!this.paused && !this.panelOpen && !this.destroyed) this.setFreeLook(true);
    this.bridge.emit('lockFailed', true);
  }

  private setFreeLook(on: boolean): void {
    this.freeLook = on;
    this.renderer.domElement.classList.toggle('truck-canvas-free-look', on);
  }

  private setPaused(paused: boolean): void {
    const resuming = this.paused && !paused;
    this.paused = paused;
    // Back from a console or a menu (just after the player's click or key): capture the mouse
    // again straight away, so nobody has to click into the game first.
    if (resuming) this.lockMouse();
    this.keys = { forward: false, back: false, left: false, right: false };
    this.dragging = false;
    if (paused) this.setFreeLook(false);
    if (paused && document.pointerLockElement) document.exitPointerLock();
  }

  private use(): void {
    if (!this.paused && this.aimed) this.bridge.emit('use', this.aimed);
  }

  // ── Developer mode ───────────────────────────────────────────────────────────────

  private devCommand(c: DevCommand): void {
    switch (c.cmd) {
      case 'clock': {
        // Only forward: the day log keeps the latest time.
        this.clock = Math.min(CLOSING, Math.max(this.clock, c.minutes));
        this.lastSkyMinute = -1;
        this.lastClockMinute = Math.floor(this.clock);
        this.setWallClock(this.clock);
        this.bridge.emit('clock', Math.floor(this.clock));
        break;
      }
      case 'speed':
        this.devSpeed = Math.max(0, c.factor);
        break;
      case 'rain':
        this.devRain = c.amount;
        break;
      case 'spawn':
        this.devSpawn = true;
        break;
      case 'knock':
        if (!this.managerDone && !this.knocking) {
          this.knocking = true;
          this.bridge.emit('knock', true);
        }
        break;
      case 'ghost':
        this.ghost = c.on;
        this.noclip = c.on;
        this.ghostY = EYE_Y;
        this.flying = { up: false, down: false };
        if (!c.on) this.at = walkStep(this.at, this.yaw, { forward: false, back: false, left: false, right: false }, 0);
        break;
      case 'noclip':
        this.noclip = c.on || this.ghost;
        if (!c.on) this.at = walkStep(this.at, this.yaw, { forward: false, back: false, left: false, right: false }, 0);
        break;
      case 'stats':
        this.statsOn = c.on;
        break;
      case 'panel':
        this.panelOpen = c.open;
        this.keys = { forward: false, back: false, left: false, right: false };
        if (c.open) {
          this.setFreeLook(false);
          if (document.pointerLockElement) document.exitPointerLock();
        } else this.lockMouse();
        break;
    }
  }

  /** Twice a second, while the developer panel is open: what the game is doing. */
  private devStats(seconds: number): void {
    if (!this.statsOn) return;
    this.frames++;
    this.statsClock += seconds;
    if (this.statsClock < 0.5) return;
    const info = this.renderer.info;
    this.bridge.emit('devStats', {
      fps: Math.round(this.frames / this.statsClock),
      drawCalls: info.render.calls,
      triangles: info.render.triangles,
      geometries: info.memory.geometries,
      textures: info.memory.textures,
      clock: this.clock,
      speed: this.devSpeed,
      rain: this.rainAmount,
      rainForced: this.devRain !== null,
      queue: this.queue.line.length,
      ordersLeft: this.orders.length - this.nextOrder,
      knocking: this.knocking,
      managerDone: this.managerDone,
      noclip: this.noclip,
      ghost: this.ghost,
      position: { x: Math.round(this.at.x * 10) / 10, z: Math.round(this.at.z * 10) / 10 },
    });
    this.frames = 0;
    this.statsClock = 0;
  }

  /** The sky, the sun and the lamps for the clock's time (changes once a game minute). */
  private applySky(): void {
    const minute = Math.floor(this.clock);
    if (minute === this.lastSkyMinute) return;
    this.lastSkyMinute = minute;
    const sky = skyAt(this.clock);
    (this.scene.background as THREE.Color).set(sky.sky);
    this.scene.fog?.color.set(sky.sky);
    // Rain greys the sky, dims the light and pulls the haze in closer; lightning flashes.
    const wet = this.rainAmount;
    (this.scene.background as THREE.Color).lerp(RAIN_SKY, wet * 0.6);
    this.scene.fog?.color.copy(this.scene.background as THREE.Color);
    const fog = this.scene.fog as THREE.Fog;
    fog.near = 18 - wet * 10;
    fog.far = 80 - wet * 35;
    this.ambient.intensity = (sky.ambient * (1 - wet * 0.2) + this.flashLight * 0.9) * Math.PI;
    this.sun.color.set(sky.sunColour);
    this.sun.intensity = sky.sunLight * (1 - wet * 0.6) * Math.PI;
    const up = (Math.max(sky.elevation, 5) * Math.PI) / 180;
    this.sun.position.set(sky.across * 10, Math.sin(up) * 10, -Math.cos(up) * 10);
    this.inside.intensity = Math.max(sky.lamps, wet * 0.5) * 1.6 * Math.PI;
    this.setSky(sky);
  }

  /**
   * The weather for the clock's time: how hard it rains, the rain itself, and now and then (in
   * heavy rain) a flash of lightning. Runs every frame; the rain keeps falling while paused.
   */
  private updateWeather(seconds: number): void {
    this.time += seconds;
    const target = this.devRain ?? rainAt(this.showers, this.clock);
    // Follow the plan smoothly (a reload mid-shower fades the rain in).
    this.rainAmount += (target - this.rainAmount) * Math.min(1, seconds * 0.8);
    if (Math.abs(this.rainAmount - this.lastWeather) > 0.02 || (target === 0 && this.rainAmount < 0.005 && this.lastWeather !== 0)) {
      if (target === 0 && this.rainAmount < 0.005) this.rainAmount = 0;
      this.lastWeather = this.rainAmount;
      this.lastSkyMinute = -1; // the sky's light depends on the rain
      this.bridge.emit('weather', this.rainAmount);
    }
    this.rain.update(this.time, this.rainAmount, this.renderer.getPixelRatio());
    this.updatePlace(this.time, this.rainAmount);
    // Lightning: only in heavy rain, and not while the game is paused.
    if (!this.paused && this.rainAmount > 0.65) {
      this.nextThunder -= seconds;
      if (this.nextThunder <= 0) {
        this.flash = 1;
        this.nextThunder = 18 + Math.random() * 30;
        this.bridge.emit('thunder', true);
      }
    }
    if (this.flash > 0) {
      this.flash = Math.max(0, this.flash - seconds * 2.5);
      // A double flicker as it fades.
      this.flashLight = this.flash * (Math.sin(this.flash * 30) > -0.3 ? 1 : 0.3);
      this.lastSkyMinute = -1;
    }
  }

  // ── The truck tour and the guide's pictures ──────────────────────────────────────────

  /** Where the camera is now, as a pose. */
  private cameraPose(): Pose {
    const e = new THREE.Euler().setFromQuaternion(this.camera.quaternion, 'YXZ');
    return { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z, yaw: e.y, pitch: e.x };
  }

  private playerPose(): Pose {
    return { x: this.at.x, y: EYE_Y, z: this.at.z, yaw: this.yaw, pitch: this.pitch };
  }

  /** Fly the camera to an object's tour stop, or (null) back to where the player stands. */
  private setTour(object: InteractableId | null): void {
    const stop = object ? stopPose(object) : null;
    // Look straight at the object, a touch low, so it sits in the middle of the view just above
    // the tour's card (owner's feedback: it used to sit too high).
    const pose = stop ? { ...stop, pitch: stop.pitch - 0.06 } : null;
    if (pose) {
      // From the title screen the tour starts where the camera is (outside, circling the truck).
      this.tourView ??= this.showcase ? this.cameraPose() : this.playerPose();
      this.tourTarget = pose;
      this.tourReturning = false;
    } else if (this.tourView && this.showcase) {
      // Back on the title screen: no flight back to where the player stands inside the truck
      // (owner's bug report: a pause inside the truck before the title view came back).
      this.tourView = null;
      this.tourTarget = null;
      this.tourReturning = false;
    } else if (this.tourView) {
      this.tourTarget = this.playerPose();
      this.tourReturning = true;
    }
  }

  /** Moves the tour camera a little closer to its target; ends the tour once back with the player. */
  private updateTour(seconds: number): void {
    if (!this.tourView || !this.tourTarget) return;
    const k = 1 - Math.exp(-seconds * 4.5);
    const v = this.tourView;
    const t = this.tourTarget;
    v.x += (t.x - v.x) * k;
    v.y += (t.y - v.y) * k;
    v.z += (t.z - v.z) * k;
    v.yaw += angleStep(v.yaw, t.yaw) * k;
    v.pitch += (t.pitch - v.pitch) * k;
    const near = Math.hypot(t.x - v.x, t.z - v.z) < 0.01 && Math.abs(angleStep(v.yaw, t.yaw)) < 0.01;
    if (this.tourReturning && near) {
      this.tourView = null;
      this.tourTarget = null;
      this.tourReturning = false;
    }
  }

  /**
   * A small picture of every object, from its tour stop, in the game's own look (so the guide
   * always matches the game). Drawn straight after rendering, then the normal view comes back.
   */
  private snapshots(): Record<string, string> {
    const pictures: Record<string, string> = {};
    const canvas = this.renderer.domElement;
    const out = document.createElement('canvas');
    out.width = 320;
    out.height = 200;
    const ctx = out.getContext('2d');
    if (!ctx) return pictures;
    const lens = this.lensAmount;
    this.look.setLens(0);
    const knocked = this.manager.visible;
    this.manager.visible = false;
    const fov = this.camera.fov;
    this.camera.fov = PICTURE_FOV;
    this.camera.updateProjectionMatrix();
    for (const stop of TOUR_STOPS) {
      const pose = stopPose(stop.object)!;
      this.camera.position.set(pose.x, pose.y, pose.z);
      this.camera.rotation.set(pose.pitch, pose.yaw, 0, 'YXZ');
      this.camera.updateMatrixWorld();
      this.look.render(this.renderer, this.scene, this.camera);
      // The middle of the view, at the picture's shape (16:10).
      const w = Math.min(canvas.width, (canvas.height * out.width) / out.height);
      const h = (w * out.height) / out.width;
      ctx.drawImage(canvas, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h, 0, 0, out.width, out.height);
      pictures[stop.object] = out.toDataURL('image/jpeg', 0.85);
    }
    this.look.setLens(lens);
    this.manager.visible = knocked;
    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();
    return pictures;
  }

  // ── Every frame ──────────────────────────────────────────────────────────────────────

  private loop = (now: number): void => {
    if (this.destroyed) return;
    const seconds = Math.min((now - this.last) / 1000, 0.1);
    this.last = now;
    this.step(seconds);
    this.frame = requestAnimationFrame(this.loop);
  };

  /** One frame (also used by tests in the browser to move time forward). */
  step(seconds: number): void {
    const dt = this.paused ? 0 : seconds;
    this.at = walkStep(this.at, this.yaw, this.keys, dt, this.noclip);
    if (this.ghost) {
      const lift = (this.flying.up ? 1 : 0) - (this.flying.down ? 1 : 0);
      this.ghostY = Math.max(0.3, Math.min(40, this.ghostY + lift * 4 * dt));
    }
    this.devStats(seconds);
    // A gentle head bob while walking.
    const moving = Object.values(this.keys).some(Boolean) && dt > 0;
    this.walkClock += dt;
    const bob = moving ? Math.sin(this.walkClock * 9) * 0.025 : 0;
    // A footstep at the bottom of each bob.
    const stepPhase = Math.floor((this.walkClock * 9) / Math.PI);
    if (moving && stepPhase !== this.lastStep) this.bridge.emit('step', true);
    this.lastStep = stepPhase;
    this.updateTour(seconds);
    // Zoom in a little while touring, smoothly.
    const fovTarget = this.tourView && !this.tourReturning ? TOUR_FOV : FOV;
    if (Math.abs(this.camera.fov - fovTarget) > 0.05) {
      this.camera.fov += (fovTarget - this.camera.fov) * (1 - Math.exp(-seconds * 4.5));
      this.camera.updateProjectionMatrix();
    }
    // The steam over the roof's coffee cup drifts up and round.
    this.steam.forEach((puff, i) => {
      const t = (this.time * 0.35 + i / 3) % 1;
      puff.position.y = TRUCK.height + 1.6 + t * 0.9;
      puff.scale.setScalar(0.7 + t * 0.6);
    });
    const filming = this.showcase && !this.tourView;
    // On a wide screen the title card covers the left third: frame the film to its right.
    this.setFilmOffset(filming && this.parent.clientWidth >= 800 ? 0.17 : 0);
    (this.veil.material as THREE.MeshBasicMaterial).opacity = 0;
    if (filming) {
      // The title film: slow shots round the world, with a fade between them (cinematic.ts).
      const pin = this.filmPin;
      const film = filmAt(pin ? pin.start + ((this.time - pin.since) % pin.seconds) : this.time);
      this.camera.position.set(film.at.x, film.at.y, film.at.z);
      this.camera.lookAt(film.look.x, film.look.y, film.look.z);
      (this.veil.material as THREE.MeshBasicMaterial).opacity = film.dark * 0.92;
    } else if (this.tourView) {
      this.camera.position.set(this.tourView.x, this.tourView.y, this.tourView.z);
      this.camera.rotation.set(this.tourView.pitch, this.tourView.yaw, 0, 'YXZ');
    } else {
      this.camera.position.set(this.at.x, this.ghost ? this.ghostY : EYE_Y + bob, this.at.z);
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    }

    const eye = { x: this.at.x, y: EYE_Y, z: this.at.z };
    const aimed = this.paused || this.ghost ? null : aimedInteractable(eye, lookDirection(this.yaw, this.pitch));
    if (aimed !== this.aimed) {
      this.aimed = aimed;
      this.bridge.emit('hover', aimed);
    }
    // Looking at the wall clock (from anywhere in the truck): the app shows the time.
    const atClock = !this.paused && !this.ghost && !this.tourView && lookingAt(eye, lookDirection(this.yaw, this.pitch), CLOCK_BOX, 5);
    if (atClock !== this.lookingAtClock) {
      this.lookingAtClock = atClock;
      this.bridge.emit('lookClock', atClock);
    }

    this.updateCustomers(dt);
    // The lens dissolves in and out even while time is stopped (it is part of the interface).
    const lensStep = seconds / LENS_SECONDS;
    this.lensAmount = Math.min(1, Math.max(0, this.lensAmount + (this.lensOn ? lensStep : -lensStep)));
    this.look.setLens(this.lensAmount);
    // The back door: opens for the Manager (even while time is stopped), rattles while they knock.
    this.doorAmount = Math.min(1, Math.max(0, this.doorAmount + (this.doorTarget ? 1 : -1) * seconds * 2.2));
    this.setDoor(this.doorAmount, this.knocking && this.doorAmount === 0 ? this.walkClock : undefined);
    this.manager.visible = this.knocking && this.doorAmount > 0.02;
    // The OPEN sign turns to CLOSED at closing time.
    const open = this.clock < CLOSING;
    if (open !== this.signOpen) {
      this.signOpen = open;
      this.setOpenSign(open);
    }
    this.updateWeather(seconds);
    this.applySky();
    this.renderer.info.reset();
    this.look.render(this.renderer, this.scene, this.camera);
    this.emitAnchor();
    this.emitLensCards();
  }

  /**
   * The truck's clock: runs while no console is open, faster when nobody is waiting, and stops at
   * closing time. Customers' patience runs on the same clock.
   */
  private updateClock(seconds: number): number {
    if (seconds <= 0 || this.clock >= CLOSING) return 0;
    const quiet = this.queue.line.length === 0;
    const minutes = Math.min(CLOSING - this.clock, seconds * GAME_MINUTES_PER_SECOND * (quiet ? QUIET_SPEEDUP : 1) * this.devSpeed);
    this.clock += minutes;
    const whole = Math.floor(this.clock);
    if (whole !== this.lastClockMinute) {
      this.lastClockMinute = whole;
      this.setWallClock(this.clock);
      this.bridge.emit('clock', whole);
    }
    return minutes;
  }

  /**
   * Eating in (dineIn.ts): a served customer stepping aside may sit down on a free seat for a
   * while, then walks back and on out. Flat cartoons have no legs to sit with and take it away.
   */
  private updateDiners(seconds: number, gameMinutes: number): void {
    const aside = stepAside(this.place);
    for (const customer of [...this.queue.leaving]) {
      if (customer.walkOff !== 'on' || customer.x < aside.at || this.decided.has(customer)) continue;
      this.decided.add(customer);
      const model = this.customers.get(customer);
      const choose = (hashString(`${customer.orderId}:eat-in`) % 1000) / 1000;
      const canSit = !!model?.hipY && this.clock < CLOSING - 30;
      const diner = model ? this.dineIn.tryToSit(customer.orderId, choose, canSit) : null;
      if (!diner || !model) continue;
      this.queue.release(customer);
      this.customers.delete(customer);
      this.diners.set(diner, { model, cup: null });
    }
    for (const done of this.dineIn.update(seconds, gameMinutes)) {
      const entry = this.diners.get(done);
      this.diners.delete(done);
      if (!entry) continue;
      if (entry.cup) this.scene.remove(entry.cup);
      this.resetPose(entry.model);
      const walker = this.queue.walkOn(done.orderId, aside.at);
      this.decided.add(walker);
      this.customers.set(walker, entry.model);
    }
    for (const [diner, entry] of this.diners) {
      const { model } = entry;
      if (diner.state === 'sitting') {
        const seat = diner.seat;
        const hip = model.hipY ?? 0.86;
        const seatTop = seat.height + 0.03;
        model.root.position.set(seat.x, GROUND_Y + seatTop - hip, seat.z);
        const diff = Math.atan2(Math.sin(seat.yaw - model.root.rotation.y), Math.cos(seat.yaw - model.root.rotation.y));
        model.root.rotation.y += diff * Math.min(1, seconds * 10);
        // Thighs forward, feet down towards the ground; one hand lifts the cup now and then.
        const bend = Math.max(1.0, Math.acos(Math.min(1, seatTop / hip)));
        model.legs[0].rotation.x = bend;
        model.legs[1].rotation.x = bend;
        const sip = Math.max(0, Math.sin(this.walkClock * 0.9 + seat.x * 3) - 0.85) / 0.15;
        model.arms[0].rotation.x = 0.55 + sip * 1.1;
        model.arms[1].rotation.x = 0.4;
        if (!entry.cup && seat.cup) {
          entry.cup = this.takeawayCup();
          entry.cup.position.set(seat.cup.x, GROUND_Y + seat.cup.y, seat.cup.z);
          this.scene.add(entry.cup);
        }
        continue;
      }
      const p = alongPath(diner.path, diner.walked);
      model.root.position.set(p.x, GROUND_Y, p.z);
      const diff = Math.atan2(Math.sin(p.yaw - model.root.rotation.y), Math.cos(p.yaw - model.root.rotation.y));
      model.root.rotation.y += diff * Math.min(1, seconds * 8);
      const swing = Math.sin(this.walkClock * 8 + p.x) * 0.55;
      model.legs[0].rotation.x = swing;
      model.legs[1].rotation.x = -swing;
      model.arms[0].rotation.x = -swing * 0.8;
      model.arms[1].rotation.x = swing * 0.8;
      if (entry.cup && diner.state === 'leaving') {
        this.scene.remove(entry.cup);
        entry.cup = null;
      }
    }
  }

  /** Standing again after sitting. */
  private resetPose(model: CustomerModel): void {
    model.root.position.y = GROUND_Y;
    for (const limb of [...model.legs, ...model.arms]) limb.rotation.x = 0;
  }

  /** A paper cup with the truck's red band, set on a diner's table. */
  private takeawayCup(): THREE.Object3D {
    const cup = new THREE.Group();
    const paper = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.032, 0.11, 8), new THREE.MeshLambertMaterial({ color: inkColour('white'), flatShading: true }));
    paper.position.y = 0.055;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0395, 0.035, 0.035, 8), new THREE.MeshLambertMaterial({ color: inkColour('red'), flatShading: true }));
    band.position.y = 0.05;
    band.scale.setScalar(1.03);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.043, 0.043, 0.015, 8), new THREE.MeshLambertMaterial({ color: inkColour('ink'), flatShading: true }));
    lid.position.y = 0.117;
    cup.add(paper, band, lid);
    return cup;
  }

  private updateCustomers(seconds: number): void {
    const gameMinutes = this.updateClock(seconds);
    // Customers arrive at their time of day, until closing.
    const next = this.orders[this.nextOrder];
    const due = this.devSpawn || this.clock >= arrivalTime(this.allOrders.indexOf(next));
    if (next && this.clock < CLOSING && due && this.queue.canJoin() && seconds > 0) {
      this.devSpawn = false;
      const order = this.orders[this.nextOrder++];
      const customer = this.queue.join(order.id);
      if (customer) {
        this.bridge.emit('arrive', true);
        // The order decides who comes: a low-poly person, a 2D cartoon or a brick toy.
        const model = buildCustomer(order.look, hashString(order.id));
        this.scene.add(model.root);
        this.customers.set(customer, model);
      }
    }
    // Patience runs out while waiting in line (not while walking off, and not while time is stopped).
    for (const customer of [...this.queue.line]) {
      if (this.ghost) continue;
      customer.waited += gameMinutes;
      if (customer.waited >= PATIENCE_MINUTES) {
        this.queue.giveUp(customer);
        this.bridge.emit('gaveUp', customer.orderId);
      }
    }
    for (const gone of this.queue.update(seconds)) {
      const model = this.customers.get(gone);
      if (model) this.scene.remove(model.root);
      this.customers.delete(gone);
    }
    this.updateDiners(seconds, gameMinutes);
    for (const [customer, model] of this.customers) {
      const p = queuePosition(customer.x, this.place);
      const walking = customer.state !== 'waiting';
      model.root.position.set(p.x, GROUND_Y, p.z);
      // Turn smoothly towards where they walk, or towards the truck while waiting.
      const target = walking ? p.yaw : FACING_TRUCK;
      const diff = Math.atan2(Math.sin(target - model.root.rotation.y), Math.cos(target - model.root.rotation.y));
      model.root.rotation.y += diff * Math.min(1, seconds * 8);
      const swing = walking ? Math.sin(this.walkClock * 8 + p.x) * 0.55 : 0;
      model.legs[0].rotation.x = swing;
      model.legs[1].rotation.x = -swing;
      model.arms[0].rotation.x = -swing * 0.8;
      model.arms[1].rotation.x = swing * 0.8;
      // A flat cartoon always turns its card to the player, and steps between two frames.
      if (model.card) {
        const toCamera = Math.atan2(this.camera.position.x - p.x, this.camera.position.z - p.z);
        model.card.mesh.rotation.y = toCamera - model.root.rotation.y;
        const frame = walking && Math.sin(this.walkClock * 8 + p.x) > 0 ? 1 : 0;
        const material = model.card.mesh.material as THREE.MeshBasicMaterial;
        if (material.map !== model.card.frames[frame]) {
          material.map = model.card.frames[frame];
          material.needsUpdate = true;
        }
        model.card.mesh.position.y = 0.855 + (walking ? Math.abs(Math.sin(this.walkClock * 8 + p.x)) * 0.05 : 0);
      }
    }

    // A ghost has no duties: whoever reaches the window takes their order and walks on.
    if (this.ghost && this.queue.front()) this.queue.serveFront();
    const front = this.queue.front();
    const frontId = front?.orderId ?? null;
    if (frontId !== this.frontOrderId) {
      this.frontOrderId = frontId;
      this.bridge.emit('front', front ? { orderId: front.orderId } : null);
    }
    const patience = front ? { orderId: front.orderId, left: Math.max(0, 1 - front.waited / PATIENCE_MINUTES) } : null;
    const patienceKey = patience ? `${patience.orderId}:${patience.left.toFixed(2)}` : '';
    if (patienceKey !== this.lastPatience) {
      this.lastPatience = patienceKey;
      this.bridge.emit('patience', patience);
    }
    // The Manager knocks once a day: at their time, or as soon as every customer has been handled.
    const noneToCome = this.clock >= CLOSING || this.nextOrder >= this.orders.length;
    const quietForGood = noneToCome && this.queue.line.length === 0;
    if (!this.ghost && !this.managerDone && !this.knocking && this.clock < CLOSING && (this.clock >= KNOCK_TIME || quietForGood)) {
      this.knocking = true;
      this.bridge.emit('knock', true);
    }
    // At closing time an unanswered Manager gives up too.
    if (this.clock >= CLOSING && this.knocking && this.doorTarget === 0) this.knocking = false;
    // The day is over once nobody else will come, the line is empty, and the Manager has been seen to.
    if (!this.closed && quietForGood && (this.managerDone || this.clock >= CLOSING)) {
      this.closed = true;
      this.bridge.emit('closed', true);
    }
  }

  /** Where the front customer's head is on screen, for the speech bubble. */
  private emitAnchor(): void {
    const front = this.queue.front();
    let anchor: { x: number; y: number } | null = null;
    if (front) {
      const p = queuePosition(front.x, this.place);
      const head = new THREE.Vector3(p.x, GROUND_Y + 1.95, p.z).project(this.camera);
      if (head.z < 1 && Math.abs(head.x) < 1.1 && Math.abs(head.y) < 1.1) {
        anchor = { x: (head.x + 1) / 2, y: (1 - head.y) / 2 };
      }
    }
    const key = anchor ? `${anchor.x.toFixed(3)},${anchor.y.toFixed(3)}` : '';
    if (key !== this.lastAnchor) {
      this.lastAnchor = key;
      this.bridge.emit('anchor', anchor);
    }
  }

  /** Where each table's card is on screen while the Data Lens is (mostly) on. */
  private emitLensCards(): void {
    const cards: LensCard[] = [];
    if (this.lensAmount > 0.5) {
      const place = (id: string, tables: string[], object: InteractableId, point: THREE.Vector3) => {
        const distance = point.distanceTo(this.camera.position);
        const p = point.clone().project(this.camera);
        if (distance <= LENS_MAX_DISTANCE && p.z < 1 && Math.abs(p.x) < 1 && Math.abs(p.y) < 1) {
          cards.push({ id, tables, object, x: (p.x + 1) / 2, y: (1 - p.y) / 2, distance });
        }
      };
      for (const spot of LENS_SPOTS) {
        const at = lensPoint(spot.box);
        place(spot.id, spot.tables, spot.object, new THREE.Vector3(at.x, at.y, at.z));
      }
      const front = this.queue.front();
      if (front) {
        const p = queuePosition(front.x, this.place);
        // Customers live in the till's data: the tablet opens their table.
        place('customer', ['customers'], 'tablet', new THREE.Vector3(p.x - 0.55, GROUND_Y + 1.6, p.z));
      }
    }
    const key = cards.map((c) => `${c.id}:${c.x.toFixed(3)},${c.y.toFixed(3)}`).join('|');
    if (key !== this.lastCards) {
      this.lastCards = key;
      this.bridge.emit('lensCards', cards);
    }
  }

  destroy(): void {
    this.destroyed = true;
    cancelAnimationFrame(this.frame);
    this.observer.disconnect();
    this.offs.forEach((off) => off());
    if (document.pointerLockElement) document.exitPointerLock();
    this.look.dispose();
    this.rain.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
