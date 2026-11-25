import { useEffect, useRef, useState } from 'react';

/** How long one star takes to fly to the counter (ms). */
const FLIGHT = 900;

type Flying = { id: number; delay: number; x: number; y: number };

/**
 * Top left, under the clock card (GAME_DESIGN.md §10, 7.1): the XP counter. When the player earns
 * XP (a right answer handed over, a Manager case), the stars pop out in the middle of the screen,
 * fly to the counter's own star, and the number ticks up as each one lands. With reduced motion,
 * or while a menu is open, the number just changes.
 */
export function XpCounter({
  xp,
  label,
  onTick,
  icon = '⭐',
  slot = 0,
  paused = false,
}: {
  xp: number;
  label: string;
  onTick?: () => void;
  icon?: string;
  /** Which row under the clock card (0 = XP, 1 = coins). */
  slot?: number;
  /** A menu is open: nothing flies, the number is simply right. */
  paused?: boolean;
}) {
  const [shown, setShown] = useState(xp);
  const [flying, setFlying] = useState<Flying[]>([]);
  const [bump, setBump] = useState(0);
  const target = useRef(xp);
  const first = useRef(true);
  const nextId = useRef(0);
  const timers = useRef<number[]>([]);
  const iconRef = useRef<HTMLSpanElement>(null);
  // The parent re-renders all the time (the clock): the latest callbacks live in refs, so a new
  // render never cancels a flight that is under way.
  const tick = useRef(onTick);
  tick.current = onTick;
  const isPaused = useRef(paused);
  isPaused.current = paused;

  const settle = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    setFlying([]);
    setShown(target.current);
  };

  // XP went up (or down, after a restart): fly the stars.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const gained = xp - target.current;
    target.current = xp;
    const still = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (gained <= 0 || still || isPaused.current) {
      settle();
      return;
    }
    // Land on the counter's own star, wherever it is on screen.
    const box = iconRef.current?.getBoundingClientRect();
    const x = box ? box.left + box.width / 2 : 36;
    const y = box ? box.top + box.height / 2 : 143 + slot * 40;
    const stars = Array.from({ length: Math.min(gained, 6) }, (_, i) => ({ id: nextId.current++, delay: i * 140, x, y }));
    setFlying((f) => [...f, ...stars]);
    const base = xp - gained;
    stars.forEach((s, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setShown(i === stars.length - 1 ? target.current : base + Math.round(((i + 1) * gained) / stars.length));
          setBump((b) => b + 1);
          tick.current?.();
          setFlying((f) => f.filter((x) => x.id !== s.id));
        }, s.delay + FLIGHT),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xp]);

  // A menu opened (Esc, the shop…): finish at once, so nothing hangs over the menu.
  useEffect(() => {
    if (paused) settle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // Leaving the page cancels what is left.
  useEffect(
    () => () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    },
    [],
  );

  return (
    <>
      <div className="hud-xp" style={{ top: 126 + slot * 40 }} title={label} aria-label={`${label}: ${shown}`}>
        <span ref={iconRef} key={bump} className={bump > 0 ? 'hud-xp-star hud-xp-bump' : 'hud-xp-star'} aria-hidden="true">
          {icon}
        </span>
        <span className="hud-xp-label">{label}</span>
        <span className="hud-xp-value">{shown}</span>
      </div>
      {!paused &&
        flying.map((s) => (
          <span
            key={s.id}
            className="xp-fly"
            style={{ animationDelay: `${s.delay}ms`, animationDuration: `${FLIGHT}ms`, ['--tx' as string]: `${s.x}px`, ['--ty' as string]: `${s.y}px` }}
            aria-hidden="true"
          >
            {icon}
          </span>
        ))}
    </>
  );
}
