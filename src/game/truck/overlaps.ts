/**
 * Finding z-fighting (GAME_DESIGN.md §7): two box faces that lie in the same plane, face the
 * same way and overlap flicker on screen, because the GPU can't tell which one is in front.
 * This walks a built scene, takes every axis-aligned box, and lists such pairs. Used by a test
 * (overlaps.test.ts) and handy in the browser while building models.
 */
import * as THREE from 'three';

export type Overlap = { a: string; b: string; axis: 'x' | 'y' | 'z'; side: 1 | -1; at: number; area: number };

type Face = { mesh: THREE.Mesh; axis: 0 | 1 | 2; side: 1 | -1; at: number; min: [number, number]; max: [number, number] };

const EPS = 1e-4;
const AXES = ['x', 'y', 'z'] as const;

const colourOf = (mesh: THREE.Mesh): string => {
  const m = mesh.material as THREE.Material & { color?: THREE.Color; map?: THREE.Texture | null };
  return Array.isArray(mesh.material) ? 'multi' : `${m.color?.getHexString() ?? ''}${m.map ? ':map' : ''}`;
};

/** Every pair of overlapping, same-plane, same-facing box faces with different looks. */
export function findOverlaps(root: THREE.Object3D, minArea = 1e-4): Overlap[] {
  root.updateMatrixWorld(true);
  const faces: (Face & { frame: string })[] = [];
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh || !(mesh.geometry instanceof THREE.BoxGeometry) || !mesh.visible) return;
    // Boxes are compared in their own turned frame: two boxes turned the same way (a boat's
    // hull and its stripe) are axis-aligned with each other there.
    const pos = new THREE.Vector3();
    const q = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    mesh.matrixWorld.decompose(pos, q, scale);
    if (q.w < 0) q.set(-q.x, -q.y, -q.z, -q.w);
    const frame = [q.x, q.y, q.z, q.w].map((v) => Math.round(v * 1000)).join(',');
    mesh.geometry.computeBoundingBox();
    const bb = mesh.geometry.boundingBox!;
    const centre = pos.clone().applyQuaternion(q.clone().invert());
    const half = bb.getSize(new THREE.Vector3()).multiply(scale).multiplyScalar(0.5);
    const offset = bb.getCenter(new THREE.Vector3()).multiply(scale);
    centre.add(offset);
    const lo = [centre.x - Math.abs(half.x), centre.y - Math.abs(half.y), centre.z - Math.abs(half.z)];
    const hi = [centre.x + Math.abs(half.x), centre.y + Math.abs(half.y), centre.z + Math.abs(half.z)];
    for (const axis of [0, 1, 2] as const) {
      const [u, v] = [0, 1, 2].filter((k) => k !== axis);
      for (const side of [-1, 1] as const) {
        faces.push({ mesh, frame, axis, side, at: side > 0 ? hi[axis] : lo[axis], min: [lo[u], lo[v]], max: [hi[u], hi[v]] });
      }
    }
  });
  // Group faces by plane, then compare within each group.
  const groups = new Map<string, Face[]>();
  for (const f of faces) {
    const key = `${f.frame}|${f.axis}:${f.side}:${Math.round(f.at / EPS)}`;
    const list = groups.get(key);
    if (list) list.push(f);
    else groups.set(key, [f]);
  }
  const found: Overlap[] = [];
  /** A downward face resting on another box's top (a cup on a counter) can't be seen. */
  const resting = (f: Face, minU: number, minV: number, maxU: number, maxV: number) => {
    if (f.axis !== 1 || f.side !== -1) return false;
    const tops = groups.get(`${(f as Face & { frame: string }).frame}|1:1:${Math.round(f.at / EPS)}`) ?? [];
    return tops.some((t) => t.mesh !== f.mesh && t.min[0] <= minU + EPS && t.min[1] <= minV + EPS && t.max[0] >= maxU - EPS && t.max[1] >= maxV - EPS);
  };
  for (const list of groups.values()) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i];
        const b = list[j];
        if (colourOf(a.mesh) === colourOf(b.mesh)) continue;
        const w = Math.min(a.max[0], b.max[0]) - Math.max(a.min[0], b.min[0]);
        const h = Math.min(a.max[1], b.max[1]) - Math.max(a.min[1], b.min[1]);
        const minU = Math.max(a.min[0], b.min[0]);
        const minV = Math.max(a.min[1], b.min[1]);
        if (w > EPS && h > EPS && w * h >= minArea && !resting(a, minU, minV, minU + w, minV + h)) {
          found.push({
            a: `${a.mesh.name || colourOf(a.mesh)} @${describe(a.mesh)}`,
            b: `${b.mesh.name || colourOf(b.mesh)} @${describe(b.mesh)}`,
            axis: AXES[a.axis],
            side: a.side,
            at: Math.round(a.at * 1000) / 1000,
            area: Math.round(w * h * 1000) / 1000,
          });
        }
      }
    }
  }
  return found;
}

function describe(mesh: THREE.Mesh): string {
  const p = new THREE.Vector3();
  mesh.getWorldPosition(p);
  return `(${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)})`;
}
