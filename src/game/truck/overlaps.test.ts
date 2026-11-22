import { beforeAll, describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PLACES } from '../../sql-core/truck/places';
import { findOverlaps, type Overlap } from './overlaps';
import { GROUND_Y } from './world';

// The models draw signs and faces into canvases; tests run without a browser, so a canvas here
// is a stand-in that accepts every drawing call.
beforeAll(() => {
  const ctx = new Proxy({}, { get: (_, key) => (key === 'measureText' ? () => ({ width: 10 }) : () => undefined), set: () => true });
  (globalThis as unknown as { document: unknown }).document = {
    createElement: () => ({ width: 0, height: 0, getContext: () => ctx }),
  };
});

/**
 * Overlaps a player can see. A face pointing down that rests on the floor or the ground is
 * hidden under the thing it stands on, so those don't count.
 */
const visible = (list: Overlap[]) =>
  list.filter(
    (o) =>
      !(o.axis === 'y' && o.side < 0 && (Math.abs(o.at) < 0.01 || Math.abs(o.at - GROUND_Y) < 0.01 || o.at < GROUND_Y)) &&
      // Slivers (the edge of a painted line on the ground) are too thin to see flicker.
      o.area >= 0.001,
  );

const describeAll = (list: Overlap[]) => list.map((o) => `${o.axis}${o.side > 0 ? '+' : '-'} = ${o.at} (${o.area} m²): ${o.a} | ${o.b}`);

describe('no flickering faces (z-fighting)', () => {
  it('in the truck, inside and out', async () => {
    const { buildTruck } = await import('./build');
    const { buildExterior } = await import('./exterior');
    const scene = new THREE.Scene();
    scene.add(buildTruck(), buildExterior());
    expect(describeAll(visible(findOverlaps(scene)))).toEqual([]);
  });

  for (const place of PLACES) {
    it(`at ${place.id}`, async () => {
      const { buildPlace } = await import('./scenery');
      const scene = new THREE.Scene();
      const built = buildPlace(place.id);
      // Moving things (cars, boats, skaters) all start in one spot: let them move first.
      (built.userData.update as (time: number, rain: number) => void)(7.3, 0);
      scene.add(built);
      expect(describeAll(visible(findOverlaps(scene)))).toEqual([]);
    });
  }

  it('would catch two faces in the same plane (the window-frame bug)', () => {
    const scene = new THREE.Scene();
    const a = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    const b = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
    b.position.set(0, 0.5, 0);
    scene.add(a, b);
    expect(findOverlaps(scene).length).toBeGreaterThan(0);
  });
});
