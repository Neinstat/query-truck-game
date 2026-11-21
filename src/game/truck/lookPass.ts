/**
 * The low-poly neon look (GAME_DESIGN.md §7, changed 21 Nov 2026): the scene is drawn at full
 * resolution with flat colours and a thin, soft ink outline where depth jumps, so the shapes read
 * clearly. Bright neon glows (bloom: the bright parts are blurred at half and quarter size and
 * added back), and the corners darken a little (vignette). No dither, no big pixels: the earlier
 * risograph look made players dizzy.
 *
 * The Data Lens turns the same picture into a cyan hologram on black with a grid; it fades in
 * smoothly as `lens` goes from 0 to 1.
 */
import * as THREE from 'three';
import { RISO } from '../art/riso';
import { hexColour } from './colour';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 resolution;
  uniform float pixelRatio;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform vec3 outlineInk;
  uniform float lens;
  uniform vec3 lensPaper;
  uniform vec3 lensLight;
  uniform vec3 lensDark;
  varying vec2 vUv;

  float viewDepth(vec2 uv) {
    float d = texture2D(tDepth, uv).x;
    return (cameraNear * cameraFar) / ((cameraFar - cameraNear) * d - cameraFar) * -1.0;
  }

  /** 0–1: how strongly this pixel is on the near side of a depth jump. */
  float edge(vec2 uv) {
    vec2 step = pixelRatio / resolution;
    float d = viewDepth(uv);
    float r = viewDepth(uv + vec2(step.x, 0.0));
    float u = viewDepth(uv + vec2(0.0, step.y));
    float l = viewDepth(uv - vec2(step.x, 0.0));
    float b = viewDepth(uv - vec2(0.0, step.y));
    float jump = max(max(r - d, u - d), max(l - d, b - d));
    if (d > cameraFar * 0.9) return 0.0;
    // Relative to distance, so far things get fewer, fainter lines.
    return smoothstep(0.06 * d, 0.12 * d, jump) * (1.0 - smoothstep(12.0, 40.0, d));
  }

  uniform sampler2D tGlowNear;
  uniform sampler2D tGlowFar;
  uniform float glowStrength;

  /** The Data Lens look: a cyan hologram on black, with a grid in the lit parts. */
  vec3 hologram(vec2 px, vec3 c, float e) {
    float l = dot(c, vec3(0.3, 0.59, 0.11));
    float gridSize = 18.0 * pixelRatio;
    bool grid = mod(px.x, gridSize) < pixelRatio || mod(px.y, gridSize) < pixelRatio;
    vec3 base = mix(lensPaper, lensLight, smoothstep(0.02, 0.45, l));
    if (grid) base = mix(base, lensDark, 0.18 + 0.25 * smoothstep(0.05, 0.4, l));
    return mix(base, lensDark, e);
  }

  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    float e = edge(vUv);
    vec3 world = mix(c, outlineInk, e * 0.55);
    // Neon glow, then a soft vignette.
    vec3 bloom = texture2D(tGlowNear, vUv).rgb * 0.9 + texture2D(tGlowFar, vUv).rgb * 1.1;
    world += bloom * glowStrength;
    vec2 v = vUv - 0.5;
    world *= 1.0 - smoothstep(0.35, 0.85, length(v * vec2(1.1, 1.0))) * 0.45;
    if (lens <= 0.0) { gl_FragColor = vec4(world, 1.0); return; }
    vec3 data = hologram(vUv * resolution, c, e);
    gl_FragColor = vec4(mix(world, data, smoothstep(0.0, 1.0, lens)), 1.0);
  }
`;

/** Keeps only the bright, glowing parts (neon), scaled down. */
const brightShader = /* glsl */ `
  uniform sampler2D tColor;
  uniform float threshold;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    float m = max(c.r, max(c.g, c.b));
    float k = smoothstep(threshold, threshold + 0.2, m);
    gl_FragColor = vec4(c * k, 1.0);
  }
`;

/** A 9-tap Gaussian blur in one direction. */
const blurShader = /* glsl */ `
  uniform sampler2D tColor;
  uniform vec2 direction;
  varying vec2 vUv;
  void main() {
    vec3 sum = texture2D(tColor, vUv).rgb * 0.227;
    sum += texture2D(tColor, vUv + direction * 1.385).rgb * 0.316;
    sum += texture2D(tColor, vUv - direction * 1.385).rgb * 0.316;
    sum += texture2D(tColor, vUv + direction * 3.231).rgb * 0.07;
    sum += texture2D(tColor, vUv - direction * 3.231).rgb * 0.07;
    gl_FragColor = vec4(sum, 1.0);
  }
`;

/** Half- and quarter-size render targets for the glow. */
function glowTarget(): THREE.WebGLRenderTarget {
  return new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false });
}

export class LookPass {
  readonly target: THREE.WebGLRenderTarget;
  private readonly material: THREE.ShaderMaterial;
  private readonly quad: THREE.Mesh;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private readonly near = [glowTarget(), glowTarget()];
  private readonly far = [glowTarget(), glowTarget()];
  private readonly bright: THREE.ShaderMaterial;
  private readonly blur: THREE.ShaderMaterial;
  private readonly pass = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
  private readonly passScene = new THREE.Scene();

  constructor() {
    this.target = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthTexture: new THREE.DepthTexture(1, 1),
    });
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        tColor: { value: this.target.texture },
        tDepth: { value: this.target.depthTexture },
        resolution: { value: new THREE.Vector2(1, 1) },
        pixelRatio: { value: 1 },
        cameraNear: { value: 0.05 },
        cameraFar: { value: 100 },
        outlineInk: { value: hexColour(RISO.ink) },
        lens: { value: 0 },
        lensPaper: { value: hexColour('#02060d') },
        lensLight: { value: hexColour('#0b3b4c') },
        lensDark: { value: hexColour(RISO.tealLight) },
        tGlowNear: { value: this.near[0].texture },
        tGlowFar: { value: this.far[0].texture },
        glowStrength: { value: 1.25 },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.scene.add(this.quad);
    this.bright = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: brightShader,
      uniforms: { tColor: { value: null }, threshold: { value: 0.86 } },
      depthTest: false,
      depthWrite: false,
    });
    this.blur = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: blurShader,
      uniforms: { tColor: { value: null }, direction: { value: new THREE.Vector2() } },
      depthTest: false,
      depthWrite: false,
    });
    this.passScene.add(this.pass);
  }

  /** Draw a full-screen pass with a material into a target. */
  private draw(renderer: THREE.WebGLRenderer, material: THREE.ShaderMaterial, source: THREE.Texture, target: THREE.WebGLRenderTarget): void {
    material.uniforms.tColor.value = source;
    this.pass.material = material;
    renderer.setRenderTarget(target);
    renderer.render(this.passScene, this.camera);
  }

  /** Blur a target in place (horizontal into the spare, vertical back). */
  private blurInPlace(renderer: THREE.WebGLRenderer, pair: THREE.WebGLRenderTarget[], spread: number): void {
    const [a, b] = pair;
    this.blur.uniforms.direction.value.set(spread / a.width, 0);
    this.draw(renderer, this.blur, a.texture, b);
    this.blur.uniforms.direction.value.set(0, spread / a.height);
    this.draw(renderer, this.blur, b.texture, a);
  }

  /** The drawing size in device pixels. */
  setSize(width: number, height: number, pixelRatio: number): void {
    this.target.setSize(width, height);
    for (const t of this.near) t.setSize(Math.max(1, Math.round(width / 2)), Math.max(1, Math.round(height / 2)));
    for (const t of this.far) t.setSize(Math.max(1, Math.round(width / 6)), Math.max(1, Math.round(height / 6)));
    this.material.uniforms.resolution.value.set(width, height);
    this.material.uniforms.pixelRatio.value = pixelRatio;
  }

  /** How far the Data Lens has faded in: 0 = the normal picture, 1 = all data view. */
  setLens(amount: number): void {
    this.material.uniforms.lens.value = Math.min(1, Math.max(0, amount));
  }

  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    this.material.uniforms.cameraNear.value = camera.near;
    this.material.uniforms.cameraFar.value = camera.far;
    renderer.setRenderTarget(this.target);
    renderer.render(scene, camera);
    // The glow: bright parts at half size (a tight halo) and at a sixth (a wide haze).
    this.draw(renderer, this.bright, this.target.texture, this.near[0]);
    this.blurInPlace(renderer, this.near, 1);
    this.draw(renderer, this.bright, this.near[0].texture, this.far[0]);
    this.blurInPlace(renderer, this.far, 1);
    this.blurInPlace(renderer, this.far, 2);
    renderer.setRenderTarget(null);
    renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.target.dispose();
    [...this.near, ...this.far].forEach((t) => t.dispose());
    this.bright.dispose();
    this.blur.dispose();
    this.material.dispose();
    this.quad.geometry.dispose();
  }
}
