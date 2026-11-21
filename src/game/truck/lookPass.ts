/**
 * The low-poly look (GAME_DESIGN.md §7, changed 21 Nov 2026): the scene is drawn at full
 * resolution with flat colours, and a thin, soft ink outline where depth jumps, so the shapes
 * read clearly. No dither, no big pixels: the earlier risograph look made players dizzy.
 *
 * The Data Lens turns the same picture into a teal blueprint on paper with a grid; it fades in
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

  /** The Data Lens look: a teal blueprint on paper, with a grid in the light parts. */
  vec3 blueprint(vec2 px, vec3 c, float e) {
    float l = dot(c, vec3(0.3, 0.59, 0.11));
    float gridSize = 18.0 * pixelRatio;
    bool grid = mod(px.x, gridSize) < pixelRatio || mod(px.y, gridSize) < pixelRatio;
    vec3 base = l > 0.7 ? lensPaper : (l > 0.42 ? mix(lensPaper, lensLight, 0.7) : lensLight);
    if (grid && l > 0.42) base = mix(base, lensLight, 0.8);
    return mix(base, lensDark, e);
  }

  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;
    float e = edge(vUv);
    vec3 world = mix(c, outlineInk, e * 0.55);
    if (lens <= 0.0) { gl_FragColor = vec4(world, 1.0); return; }
    vec3 data = blueprint(vUv * resolution, c, e);
    gl_FragColor = vec4(mix(world, data, smoothstep(0.0, 1.0, lens)), 1.0);
  }
`;

export class LookPass {
  readonly target: THREE.WebGLRenderTarget;
  private readonly material: THREE.ShaderMaterial;
  private readonly quad: THREE.Mesh;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

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
        lensPaper: { value: hexColour(RISO.paper) },
        lensLight: { value: hexColour(RISO.tealLight) },
        lensDark: { value: hexColour(RISO.tealDark) },
      },
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.scene.add(this.quad);
  }

  /** The drawing size in device pixels. */
  setSize(width: number, height: number, pixelRatio: number): void {
    this.target.setSize(width, height);
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
    renderer.setRenderTarget(null);
    renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.target.dispose();
    this.material.dispose();
    this.quad.geometry.dispose();
  }
}
