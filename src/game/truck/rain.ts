/**
 * Rain over the place around the truck (GAME_DESIGN.md §7): thin falling streaks and little splashes on the ground,
 * drawn on the GPU (each streak's height is worked out from the time in the shader). How hard it
 * rains (0–1) decides how many streaks show. No rain falls inside the truck.
 */
import * as THREE from 'three';
import { GROUND_Y, TRUCK } from './world';

const STREAKS = 5000;
const SPLASHES = 900;
/** Where the rain falls (m), around the truck and over the street. */
const AREA = { minX: -22, maxX: 22, minZ: -26, maxZ: 8, top: 14 };

const streakVertex = /* glsl */ `
  attribute vec3 seed;
  attribute float tip;
  uniform float time;
  uniform float amount;
  uniform vec3 area;
  uniform vec4 truck;
  varying float vAlpha;
  void main() {
    float fall = mod(seed.y + time * (11.0 + seed.z * 4.0), area.z);
    vec3 p = vec3(seed.x, ${GROUND_Y.toFixed(2)} + area.z - fall, position.z);
    // A little wind: the streak leans, and its tip trails up-wind.
    p.x += fall * 0.06;
    p.y += tip * (0.35 + seed.z * 0.25);
    p.x -= tip * 0.03;
    bool inside = p.x > truck.x && p.x < truck.y && p.z > truck.z && p.z < truck.w && p.y > -0.5;
    bool hidden = seed.z > amount || inside;
    vAlpha = hidden ? 0.0 : (0.35 + 0.4 * (1.0 - tip));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    if (hidden) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  }
`;

const streakFragment = /* glsl */ `
  uniform vec3 colour;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(colour, vAlpha);
  }
`;

const splashVertex = /* glsl */ `
  attribute vec2 seed;
  uniform float time;
  uniform float amount;
  uniform float pixelRatio;
  uniform vec4 truck;
  varying float vLife;
  void main() {
    float life = fract(time * (1.6 + seed.y) + seed.x * 7.0);
    vLife = life;
    vec3 p = position;
    bool inside = p.x > truck.x && p.x < truck.y && p.z > truck.z && p.z < truck.w;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + life * 7.0) * pixelRatio * (8.0 / max(1.0, -mv.z));
    if (seed.y > amount || inside) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
  }
`;

const splashFragment = /* glsl */ `
  uniform vec3 colour;
  varying float vLife;
  void main() {
    vec2 d = gl_PointCoord - 0.5;
    float r = length(d * vec2(1.0, 2.2));
    float ring = smoothstep(0.5, 0.38, r) * smoothstep(0.2, 0.36, r);
    gl_FragColor = vec4(colour, ring * (1.0 - vLife) * 0.5);
  }
`;

export class Rain {
  readonly group = new THREE.Group();
  private readonly streakMaterial: THREE.ShaderMaterial;
  private readonly splashMaterial: THREE.ShaderMaterial;

  constructor() {
    const half = { x: TRUCK.length / 2 + 0.15, z: TRUCK.depth / 2 + 0.15 };
    const truck = new THREE.Vector4(-half.x, half.x, -half.z, half.z);
    // Streaks: two vertices each (tip 0 = the bottom, 1 = the top).
    const positions = new Float32Array(STREAKS * 2 * 3);
    const seeds = new Float32Array(STREAKS * 2 * 3);
    const tips = new Float32Array(STREAKS * 2);
    for (let i = 0; i < STREAKS; i++) {
      const x = AREA.minX + Math.random() * (AREA.maxX - AREA.minX);
      const z = AREA.minZ + Math.random() * (AREA.maxZ - AREA.minZ);
      const offset = Math.random() * AREA.top;
      const rank = Math.random();
      for (let k = 0; k < 2; k++) {
        const v = i * 2 + k;
        positions.set([x, 0, z], v * 3);
        seeds.set([x, offset, rank], v * 3);
        tips[v] = k;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('seed', new THREE.BufferAttribute(seeds, 3));
    geometry.setAttribute('tip', new THREE.BufferAttribute(tips, 1));
    // The streaks move in the shader: never cull them by their resting place.
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 6, -9), 60);
    this.streakMaterial = new THREE.ShaderMaterial({
      vertexShader: streakVertex,
      fragmentShader: streakFragment,
      uniforms: {
        time: { value: 0 },
        amount: { value: 0 },
        area: { value: new THREE.Vector3(0, 0, AREA.top) },
        truck: { value: truck },
        colour: { value: new THREE.Color(0.5, 0.6, 0.78) },
      },
      transparent: true,
      depthWrite: false,
    });
    const streaks = new THREE.LineSegments(geometry, this.streakMaterial);
    streaks.frustumCulled = false;
    this.group.add(streaks);

    // Splashes: rings that pop up on the ground.
    const splashPositions = new Float32Array(SPLASHES * 3);
    const splashSeeds = new Float32Array(SPLASHES * 2);
    for (let i = 0; i < SPLASHES; i++) {
      // Mostly close to the truck, where the player can see them.
      const near = i < SPLASHES * 0.6;
      const x = near ? -10 + Math.random() * 20 : AREA.minX + Math.random() * (AREA.maxX - AREA.minX);
      const z = near ? -12 + Math.random() * 10 : AREA.minZ + Math.random() * (AREA.maxZ - AREA.minZ);
      splashPositions.set([x, GROUND_Y + 0.05, z], i * 3);
      splashSeeds.set([Math.random(), Math.random()], i * 2);
    }
    const splashGeometry = new THREE.BufferGeometry();
    splashGeometry.setAttribute('position', new THREE.BufferAttribute(splashPositions, 3));
    splashGeometry.setAttribute('seed', new THREE.BufferAttribute(splashSeeds, 2));
    this.splashMaterial = new THREE.ShaderMaterial({
      vertexShader: splashVertex,
      fragmentShader: splashFragment,
      uniforms: {
        time: { value: 0 },
        amount: { value: 0 },
        pixelRatio: { value: 1 },
        truck: { value: truck },
        colour: { value: new THREE.Color(0.62, 0.72, 0.88) },
      },
      transparent: true,
      depthWrite: false,
    });
    const splashes = new THREE.Points(splashGeometry, this.splashMaterial);
    splashes.frustumCulled = false;
    this.group.add(splashes);
  }

  /** Every frame: the time (s), how hard it rains (0–1), and the screen's pixel ratio. */
  update(time: number, amount: number, pixelRatio: number): void {
    for (const m of [this.streakMaterial, this.splashMaterial]) {
      m.uniforms.time.value = time;
      m.uniforms.amount.value = amount;
    }
    this.splashMaterial.uniforms.pixelRatio.value = pixelRatio;
    this.group.visible = amount > 0.001;
  }

  dispose(): void {
    this.group.traverse((o) => {
      if (o instanceof THREE.LineSegments || o instanceof THREE.Points) o.geometry.dispose();
    });
    this.streakMaterial.dispose();
    this.splashMaterial.dispose();
  }
}
