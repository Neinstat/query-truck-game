import { useEffect, useRef, useState } from 'react';
import type { ServedReward } from './objectives';

/** After each customer: what they paid (+coins, +XP) and, when it happens, a level up (9.4). */
export function RewardPop({ served, reward, levelTitle, text }: {
  served: number;
  reward: (() => ServedReward | null);
  levelTitle: string;
  text: { xp: (n: number) => string; coins: (n: number) => string; levelUp: (title: string) => string };
}) {
  const [shown, setShown] = useState<{ id: number; r: ServedReward } | null>(null);
  const last = useRef(served);
  const rewardRef = useRef(reward);
  rewardRef.current = reward;
  useEffect(() => {
    if (served > last.current) {
      const r = rewardRef.current();
      if (r) setShown({ id: served, r });
    }
    last.current = served;
  }, [served]);
  useEffect(() => {
    if (!shown) return;
    const timer = window.setTimeout(() => setShown(null), 3600);
    return () => window.clearTimeout(timer);
  }, [shown]);
  if (!shown) return null;
  return (
    <div className="reward-pop" key={shown.id} role="status">
      <span>{text.coins(shown.r.coins)}</span>
      <span>{text.xp(shown.r.xp)}</span>
      {shown.r.levelUp && <strong>{text.levelUp(levelTitle)}</strong>}
    </div>
  );
}
