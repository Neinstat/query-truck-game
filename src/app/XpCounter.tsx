import { useEffect, useRef, useState } from 'react';

/** How long one star takes to fly to the counter (ms). */
const FLIGHT = 900;

/**
 * Top left, under the clock card (GAME_DESIGN.md §10, 7.1): the XP counter. When the player earns
 * XP (a right answer handed over, a Manager case), the stars pop out in the middle of the screen,
 * fly to the counter, and the number ticks up as each one lands. With reduced motion the number
 * just changes.
 */
export function XpCounter({
  xp,
  label,
  onTick,
  icon = '⭐',
  slot = 0,
}: {
  xp: number;
  label: string;
  onTick?: () => void;
  icon?: string;
  /** Which row under the clock card (0 = XP, 1 = coins). */
  slot?: number;
}) {
  const [shown, setShown] = useState(xp);
  const [flying, setFlying] = useState<{ id: number; delay: number }[]>([]);
  const target = useRef(xp);
  const first = useRef(true);
  const nextId = useRef(0);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const gained = xp - target.current;
    target.current = xp;
    if (gained <= 0) {
      setShown(xp);
      return;
    }
    const still = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) {
      setShown(xp);
      return;
    }
    const stars = Array.from({ length: Math.min(gained, 6) }, (_, i) => ({ id: nextId.current++, delay: i * 140 }));
    setFlying((f) => [...f, ...stars]);
    const timers: number[] = [];
    // Each star that lands adds its share; the last one lands exactly on the new total.
    const base = xp - gained;
    stars.forEach((s, i) => {
      timers.push(
        window.setTimeout(() => {
          setShown(i === stars.length - 1 ? xp : base + Math.round(((i + 1) * gained) / stars.length));
          setBump((b) => b + 1);
          onTick?.();
          setFlying((f) => f.filter((x) => x.id !== s.id));
        }, s.delay + FLIGHT),
      );
    });
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [xp, onTick]);

  return (
    <>
      <div className="hud-xp" style={{ top: 126 + slot * 40 }} title={label} aria-label={`${label}: ${shown}`}>
        <span key={bump} className={bump > 0 ? 'hud-xp-star hud-xp-bump' : 'hud-xp-star'} aria-hidden="true">
          {icon}
        </span>
        <span className="hud-xp-label">{label}</span>
        <span className="hud-xp-value">{shown}</span>
      </div>
      {flying.map((s) => (
        <span key={s.id} className="xp-fly" style={{ animationDelay: `${s.delay}ms`, animationDuration: `${FLIGHT}ms`, ['--ty' as string]: `${142 + slot * 40}px` }} aria-hidden="true">
          {icon}
        </span>
      ))}
    </>
  );
}
