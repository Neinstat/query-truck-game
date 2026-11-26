/**
 * The developer panel (GAME_DESIGN.md §11): tools for building and testing the game, not for
 * players. Open and close it with F2 (or the backquote key `). It is there while developing
 * (`npm run dev`); on a built or hosted copy it only appears after opening the page once with
 * `?dev` in the address (remembered in this browser; `?dev=off` hides it again).
 *
 * It shows what the game is doing (time, day, place, weather, queue, the Manager, how well each
 * concept is known, and performance), and can move time on, speed it up, make it rain, call the
 * next customer, serve an order without SQL, make the Manager knock, walk anywhere, fly as a
 * ghost with no duties, change the
 * place, end, restart or skip the day, and wipe all progress.
 */
import { savedKeys } from './progress';
import { useEffect, useMemo, useState } from 'react';
import type { DevCommand, DevStats, TruckBridge } from '../game/truck/bridge';
import type { DayLog } from '../sql-core/truck/day';
import { CLOSING, formatClock, KNOCK_TIME, OPENING } from '../sql-core/truck/day';
import { masteryFrom } from '../sql-core/truck/repetition';
import { CONCEPTS } from '../sql-core/truck/concepts';
import { PLACES, type Place } from '../sql-core/truck/places';
import { sound } from '../audio/sound';
import { loadBonus, saveBonus } from './devBonus';
import { EGGS } from '../sql-core/truck/eggs';
import { SHOP_ITEMS } from '../sql-core/truck/shop';
import { loadEggs } from './eggs';
import { skipTitleNextLoad } from './useTruckShift';
import { ANALYSIS_DAY } from '../sql-core/truck/badges';

const DEV_KEY = 'query-truck.dev';

/** Is developer mode allowed here? Always while developing; on a built copy only after `?dev`. */
export function devAllowed(): boolean {
  if (import.meta.env.DEV) return true;
  try {
    const asked = new URLSearchParams(window.location.search).get('dev');
    if (asked === 'off') localStorage.removeItem(DEV_KEY);
    else if (asked !== null) localStorage.setItem(DEV_KEY, '1');
    return localStorage.getItem(DEV_KEY) === '1';
  } catch {
    return false;
  }
}

type Props = {
  bridge: TruckBridge;
  day: DayLog;
  past: readonly DayLog[];
  place: Place;
  hasOrder: boolean;
  onServe: () => void;
  onRestart: () => void;
  onNextDay: () => void;
  onNextWeek: () => void;
  onSkipTo: (day: number) => void;
  onClose: () => void;
};

export function DevPanel({ bridge, day, past, place, hasOrder, onServe, onRestart, onNextDay, onNextWeek, onSkipTo, onClose }: Props) {
  const [stats, setStats] = useState<DevStats | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [tab, setTab] = useState<'play' | 'cheats' | 'state' | 'perf'>('play');

  // Ask the game for stats while the panel is open.
  useEffect(() => {
    const off = bridge.on('devStats', setStats);
    bridge.emit('dev', { cmd: 'stats', on: true });
    return () => {
      off();
      bridge.emit('dev', { cmd: 'stats', on: false });
    };
  }, [bridge]);

  const mastery = useMemo(() => masteryFrom(past), [past]);
  const dev = (c: DevCommand) => bridge.emit('dev', c);
  const clock = stats?.clock ?? day.clock;
  const jump = (minutes: number) => dev({ cmd: 'clock', minutes });
  const goPlace = (id: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('place', id);
    window.location.href = url.toString();
  };
  const [bonus] = useState(loadBonus);
  const reload = () => {
    skipTitleNextLoad();
    window.location.reload();
  };
  const gift = (b: { xp: number; coins: number }) => {
    saveBonus(b);
    reload();
  };
  const unlockShop = () => {
    try {
      const shop = JSON.parse(localStorage.getItem('query-truck.shop') ?? '{}') as { owned?: string[]; equipped?: Record<string, string> };
      localStorage.setItem('query-truck.shop', JSON.stringify({ owned: SHOP_ITEMS.map((i) => i.id), equipped: shop.equipped ?? {} }));
    } catch {
      // Without storage nothing is kept.
    }
    reload();
  };
  const findEggs = () => {
    try {
      localStorage.setItem('query-truck.eggs', JSON.stringify([...new Set([...loadEggs(), ...EGGS.map((e) => e.id)])]));
    } catch {
      // Without storage nothing is kept.
    }
    reload();
  };
  const memory = (performance as unknown as { memory?: { usedJSHeapSize: number } }).memory;

  return (
    <aside className="dev-panel" aria-label="Developer panel">
      <header className="dev-header">
        <strong>🛠 Developer</strong>
        <span className="dev-key">F2 / 🛠</span>
        <button className="dev-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </header>
      <nav className="dev-tabs">
        {(['play', 'cheats', 'state', 'perf'] as const).map((id) => (
          <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>
            {id === 'play' ? 'Controls' : id === 'cheats' ? 'Cheats' : id === 'state' ? 'State' : 'Performance'}
          </button>
        ))}
      </nav>

      {tab === 'play' && (
        <div className="dev-body">
          <h4>Time · {formatClock(clock)}</h4>
          <div className="dev-row">
            <button onClick={() => jump(clock + 30)}>+30 min</button>
            <button onClick={() => jump(clock + 60)}>+1 h</button>
            <button onClick={() => jump(KNOCK_TIME)}>13:30 knock</button>
            <button onClick={() => jump(CLOSING - 15)}>16:45</button>
            <button onClick={() => jump(CLOSING)}>17:00 close</button>
          </div>
          <div className="dev-row">
            <span>Speed</span>
            {[0, 1, 4, 16].map((f) => (
              <button key={f} className={stats?.speed === f ? 'active' : ''} onClick={() => dev({ cmd: 'speed', factor: f })}>
                {f === 0 ? '⏸ stop' : `${f}×`}
              </button>
            ))}
          </div>

          <h4>Customers & the Manager</h4>
          <div className="dev-row">
            <button onClick={() => dev({ cmd: 'spawn' })}>Call next customer</button>
            <button onClick={onServe} disabled={!hasOrder}>
              Serve order (⭐⭐⭐)
            </button>
            <button onClick={() => dev({ cmd: 'knock' })} disabled={stats?.managerDone || stats?.knocking}>
              Manager knocks now
            </button>
          </div>

          <h4>Weather</h4>
          <div className="dev-row">
            <button className={!stats?.rainForced ? 'active' : ''} onClick={() => dev({ cmd: 'rain', amount: null })}>
              Day's own
            </button>
            <button onClick={() => dev({ cmd: 'rain', amount: 0 })}>Dry</button>
            <button onClick={() => dev({ cmd: 'rain', amount: 0.4 })}>Light rain</button>
            <button onClick={() => dev({ cmd: 'rain', amount: 1 })}>Storm</button>
          </div>

          <h4>Place (reloads)</h4>
          <div className="dev-row">
            {PLACES.map((p) => (
              <button key={p.id} className={p.id === place.id ? 'active' : ''} onClick={() => goPlace(p.id)} title={p.name.en}>
                {p.icon} {p.id}
              </button>
            ))}
          </div>

          <h4>Player</h4>
          <div className="dev-row">
            <button className={stats?.noclip ? 'active' : ''} disabled={stats?.ghost} onClick={() => dev({ cmd: 'noclip', on: !stats?.noclip })}>
              {stats?.noclip ? '🚶 Walk anywhere: on' : '🚶 Walk anywhere (out of the truck)'}
            </button>
            <button className={stats?.ghost ? 'active' : ''} onClick={() => dev({ cmd: 'ghost', on: !stats?.ghost })}>
              {stats?.ghost ? '👻 Ghost: on' : '👻 Ghost (fly, no duties)'}
            </button>
          </div>
          {stats?.ghost && (
            <p className="dev-note">
              Fly anywhere: WASD to move, Space up, Shift down. Customers serve themselves (not saved as yours), nobody runs out of
              patience, the Manager doesn't knock and nothing can be used. Turn it off to play again.
            </p>
          )}

          <h4>Day {past.length + 1}</h4>
          <div className="dev-row">
            <button onClick={onRestart}>↺ Restart this day</button>
            <button onClick={onNextDay}>⏭ Skip to the next day</button>
            <button onClick={onNextWeek}>⏭⏭ Skip to the next week</button>
          </div>
          <div className="dev-row">
            {confirmReset ? (
              <>
                <span>Wipe every saved day? This cannot be undone.</span>
                <button
                  className="danger"
                  onClick={() => {
                    for (const k of savedKeys()) localStorage.removeItem(k);
                    localStorage.setItem(DEV_KEY, '1');
                    window.location.reload();
                  }}
                >
                  Yes, reset
                </button>
                <button onClick={() => setConfirmReset(false)}>Cancel</button>
              </>
            ) : (
              <button className="danger" onClick={() => setConfirmReset(true)}>
                🗑 Reset all progress
              </button>
            )}
          </div>
        </div>
      )}

      {tab === 'cheats' && (
        <div className="dev-body">
          <p className="dev-note">Gifts for testing. They do not touch the real rules, are saved apart, and go away with *Reset all progress*. The page reloads after each.</p>
          <h4>Coins · {bonus.coins} given</h4>
          <div className="dev-row">
            {[100, 500, 2000].map((n) => (
              <button key={n} onClick={() => gift({ ...bonus, coins: bonus.coins + n })}>
                +{n} 🪙
              </button>
            ))}
          </div>
          <h4>XP · {bonus.xp} given</h4>
          <div className="dev-row">
            {[10, 50, 250].map((n) => (
              <button key={n} onClick={() => gift({ ...bonus, xp: bonus.xp + n })}>
                +{n} ⭐
              </button>
            ))}
            <button onClick={() => gift({ xp: 0, coins: 0 })}>Take back all gifts</button>
          </div>
          <h4>Shop, badges and secrets</h4>
          <div className="dev-row">
            <button onClick={unlockShop}>Own every shop item</button>
            <button onClick={findEggs}>Find every easter egg</button>
          </div>
          <h4>Jump in the story</h4>
          <div className="dev-row">
            {[6, 11, 16, 21, 26, ANALYSIS_DAY, ANALYSIS_DAY + 1].map((n) => (
              <button key={n} onClick={() => onSkipTo(n)} disabled={n <= past.length + 1}>
                Day {n}
              </button>
            ))}
          </div>
          <p className="dev-note">Days 6, 11, 16, 21 and 26 open weeks 2–6; day {ANALYSIS_DAY} is the Analysis Case; the day after it is free mode. Skipped days count as empty (no XP, no mastery).</p>
        </div>
      )}

      {tab === 'state' && (
        <div className="dev-body">
          <dl className="dev-facts">
            <dt>Day</dt>
            <dd>
              {past.length + 1} · {day.date} · {place.icon} {place.name.en}
            </dd>
            <dt>Clock</dt>
            <dd>
              {formatClock(clock)} ({Math.round(((clock - OPENING) / (CLOSING - OPENING)) * 100)}% of the day)
            </dd>
            <dt>Orders</dt>
            <dd>
              {day.served.length} served · {day.missed.length} missed · {day.orders.length} planned · {stats?.ordersLeft ?? '–'} still to come
            </dd>
            <dt>Queue</dt>
            <dd>{stats?.queue ?? '–'} waiting</dd>
            <dt>Manager</dt>
            <dd>{day.manager ? `answered, ${day.manager.stars}⭐` : stats?.knocking ? 'knocking' : 'not yet'}</dd>
            <dt>Weather</dt>
            <dd>
              rain {Math.round((stats?.rain ?? 0) * 100)}%{stats?.rainForced ? ' (forced)' : ''}
            </dd>
            <dt>Radio</dt>
            <dd>{sound.station.name}</dd>
            <dt>Position</dt>
            <dd>{stats ? `x ${stats.position.x}, z ${stats.position.z}` : '–'}</dd>
            <dt>Saved keys</dt>
            <dd>{savedKeys().join(', ') || 'none'}</dd>
          </dl>
          <h4>Concepts (from the days before today)</h4>
          <table className="dev-table">
            <thead>
              <tr>
                <th>concept</th>
                <th>level</th>
                <th>due</th>
                <th>practised</th>
              </tr>
            </thead>
            <tbody>
              {CONCEPTS.map((c) => {
                const m = mastery[c];
                return (
                  <tr key={c}>
                    <td>
                      <code>{c}</code>
                    </td>
                    <td>{m ? `${'●'.repeat(m.level)}${'○'.repeat(5 - m.level)}` : 'new'}</td>
                    <td>{m?.due ?? '–'}</td>
                    <td>{m?.practised ?? 0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h4>Today's orders</h4>
          <ol className="dev-orders">
            {day.orders.map((id) => (
              <li key={id}>
                <code>{id}</code> {day.served.some((s) => s.orderId === id) ? '✅' : day.missed.includes(id) ? '❌' : ''}
              </li>
            ))}
          </ol>
        </div>
      )}

      {tab === 'perf' && (
        <div className="dev-body">
          <dl className="dev-facts">
            <dt>Frames per second</dt>
            <dd className={stats && stats.fps < 40 ? 'dev-bad' : ''}>{stats?.fps ?? '–'}</dd>
            <dt>Draw calls / frame</dt>
            <dd>{stats?.drawCalls ?? '–'}</dd>
            <dt>Triangles / frame</dt>
            <dd>{stats ? stats.triangles.toLocaleString() : '–'}</dd>
            <dt>Geometries in memory</dt>
            <dd>{stats?.geometries ?? '–'}</dd>
            <dt>Textures in memory</dt>
            <dd>{stats?.textures ?? '–'}</dd>
            <dt>JavaScript memory</dt>
            <dd>{memory ? `${Math.round(memory.usedJSHeapSize / 1048576)} MB` : 'not shown by this browser'}</dd>
          </dl>
          <p className="dev-note">
            Good targets: 55–60 fps, under ~1,500 draw calls and under ~1 million triangles. For more, open the browser's DevTools
            (⌥⌘I) → Performance, and `npm run size` in the terminal for the code and build size.
          </p>
        </div>
      )}
    </aside>
  );
}
