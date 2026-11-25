import { useEffect, useRef, useState } from 'react';
import type { TruckBridge } from '../game/truck/bridge';
import type { UiText } from '../i18n';

const RADIUS = 56;

/**
 * Phone and tablet controls (8.1b): drag anywhere to look, a stick to walk, a Use button for the
 * object in the middle of the view, and a lens button (the menu button is the one in the corner). Everything else (the
 * tablet, word blocks, the on-screen keyboard) already works by touch.
 */
export function TouchControls({ bridge, t, canvasParent, onLens }: { bridge: TruckBridge; t: UiText; canvasParent: HTMLElement | null; onLens: () => void }) {
  const look = useRef<{ id: number; x: number; y: number } | null>(null);
  const stick = useRef<{ id: number; x: number; y: number } | null>(null);
  const [knob, setKnob] = useState({ x: 0, y: 0 });

  // Looking: a drag on the picture itself (the canvas), so the talk bubble, the tablet and
  // every other panel above it keep working by touch.
  useEffect(() => {
    const canvas = canvasParent?.querySelector('canvas');
    if (!canvas) return;
    canvas.style.touchAction = 'none';
    const down = (e: PointerEvent) => {
      if (look.current) return;
      look.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      const l = look.current;
      if (!l || l.id !== e.pointerId) return;
      bridge.emit('touchLook', { dx: e.clientX - l.x, dy: e.clientY - l.y });
      l.x = e.clientX;
      l.y = e.clientY;
    };
    const up = (e: PointerEvent) => {
      if (look.current?.id === e.pointerId) look.current = null;
    };
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    return () => {
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', up);
      canvas.removeEventListener('pointercancel', up);
      look.current = null;
    };
  }, [bridge, canvasParent]);

  const onStickDown = (e: React.PointerEvent) => {
    const box = e.currentTarget.getBoundingClientRect();
    stick.current = { id: e.pointerId, x: box.left + box.width / 2, y: box.top + box.height / 2 };
    e.currentTarget.setPointerCapture(e.pointerId);
    onStickMove(e);
  };
  const onStickMove = (e: React.PointerEvent) => {
    const s = stick.current;
    if (!s || s.id !== e.pointerId) return;
    let x = (e.clientX - s.x) / RADIUS;
    let y = (e.clientY - s.y) / RADIUS;
    const length = Math.hypot(x, y);
    if (length > 1) {
      x /= length;
      y /= length;
    }
    setKnob({ x: x * RADIUS * 0.7, y: y * RADIUS * 0.7 });
    bridge.emit('touchMove', { x, y });
  };
  const onStickUp = (e: React.PointerEvent) => {
    if (stick.current?.id !== e.pointerId) return;
    stick.current = null;
    setKnob({ x: 0, y: 0 });
    bridge.emit('touchMove', { x: 0, y: 0 });
  };

  return (
    <div className="touch-layer">
      <div className="touch-stick" onPointerDown={onStickDown} onPointerMove={onStickMove} onPointerUp={onStickUp} onPointerCancel={onStickUp} aria-label={t.touchWalk}>
        <div className="touch-knob" style={{ transform: `translate(${knob.x}px, ${knob.y}px)` }} />
      </div>
      <button className="touch-button touch-use" onClick={() => bridge.emit('touchUse', true)}>
        {t.touchUse}
      </button>
      <button className="touch-button touch-lens" onClick={onLens} aria-label={t.touchLens}>
        🔍
      </button>
    </div>
  );
}
