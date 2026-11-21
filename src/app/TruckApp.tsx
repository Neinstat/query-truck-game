import { useEffect, useMemo, useRef, useState } from 'react';
import { ui, useLang, type UiText } from '../i18n';
import { orderLine } from '../sql-core/truck/orders';
import { TruckBridge, type LensCard } from '../game/truck/bridge';
import { STATIONS } from '../sql-core/stations';
import { DataLens, useTableSummaries } from './DataLens';
import { placeOnScreen } from './overlayLayout';
import { restartDay, SKIP_TITLE_KEY, startNextDay, useTruckShift } from './useTruckShift';
import { Guide, LoadingScreen, PauseMenu, TitleScreen, TruckTour } from './Menus';
import { guideFor } from './guide';
import { DaySummary } from './DaySummary';
import { useSound } from './useSound';
import { CLOSING, formatClock, OPENING } from '../sql-core/truck/day';

/** Every table in the truck, for the Data Lens cards. */
const ALL_TABLES = [...new Set(Object.values(STATIONS).flatMap((s) => s.tables))];

/** After "next day" or "play again" the page reloads straight into the truck (no title). */
function skipTitleOnce(): boolean {
  try {
    const skip = sessionStorage.getItem(SKIP_TITLE_KEY) === '1';
    sessionStorage.removeItem(SKIP_TITLE_KEY);
    return skip;
  } catch {
    return false;
  }
}

type Screen = 'title' | 'playing' | 'paused';

/** ORDER BY 2077: the food truck in the neon city, first person in 3D (GAME_DESIGN.md §7). */
export function TruckApp() {
  const [lang, setLang] = useLang();
  const t = ui[lang];
  const bridge = useMemo(() => new TruckBridge(), []);
  const parentRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [locked, setLocked] = useState(false);
  const [aimed, setAimed] = useState<string | null>(null);
  const [anchor, setAnchor] = useState<{ x: number; y: number } | null>(null);
  // The 3D view's size in pixels, to keep the bubble and the lens cards on screen.
  const [view, setView] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;
    const measure = () => setView({ width: el.clientWidth, height: el.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const [screen, setScreen] = useState<Screen>(() => (skipTitleOnce() ? 'playing' : 'title'));
  const [guideOpen, setGuideOpen] = useState(false);
  /** The truck tour: which stop the camera is at (null: no tour). */
  const [tourStep, setTourStep] = useState<number | null>(null);
  /** Pictures of the truck's objects for the guide, taken in the game when the guide opens. */
  const [pictures, setPictures] = useState<Record<string, string>>({});
  // Time stops in the truck while a menu is open, and until the records are open.
  const [dataReady, setDataReady] = useState(false);
  const menuOpen = screen !== 'playing' || guideOpen || tourStep !== null || !ready || !dataReady;
  const { front, order, answerWhere, orderTables, db, dbError, day, orders, past, dayDone, knocking, mood, patienceLeft, consoleOpen, overlays } =
    useTruckShift(bridge, lang, t, menuOpen);
  useEffect(() => setDataReady(db !== null), [db]);
  // The orders served before this page load: the game skips those customers.
  /** Closing time, or the day ended early because nobody else is coming. */
  const shut = day.clock >= CLOSING || dayDone;
  const startOnLoad = useRef({
    orders: orders.map((o) => ({ id: o.id, look: o.look })),
    handled: [...day.served.map((s) => s.orderId), ...day.missed],
    clock: day.clock,
    managerDone: day.manager !== null,
    // `?rain` in the address: rain today whatever the weather (for testing).
    forceRain: new URLSearchParams(window.location.search).has('rain'),
  });
  const [lens, setLens] = useState(false);
  const [lensCards, setLensCards] = useState<LensCard[]>([]);
  /** How hard it rains (0–1), for the clock card's icon. */
  const [rain, setRain] = useState(0);
  useEffect(() => bridge.on('weather', setRain), [bridge]);
  useSound(bridge, { knocking, consoleOpen, dayDone, lens, paused: menuOpen });
  const summaries = useTableSummaries(lens ? db : null, ALL_TABLES, day.served.length);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => bridge.on('locked', setLocked), [bridge]);
  useEffect(() => bridge.on('hover', setAimed), [bridge]);
  useEffect(() => bridge.on('anchor', setAnchor), [bridge]);
  // The Data Lens: L in the game, or the button; the game dissolves the view and places the cards.
  useEffect(() => bridge.on('lensKey', () => setLens((on) => !on)), [bridge]);
  useEffect(() => bridge.on('lensCards', setLensCards), [bridge]);
  useEffect(() => bridge.emit('lens', lens), [bridge, lens, ready]);

  // Into the truck (from the title, the pause menu or the guide): capture the mouse again.
  const play = () => {
    setScreen('playing');
    bridge.emit('lock', true);
  };
  // The truck tour follows the guide's truck page, one object per stop.
  const tourItems = useMemo(
    () => (guideFor(lang).find((p) => p.id === 'truck')?.items ?? []).filter((i) => i.object),
    [lang],
  );
  useEffect(() => {
    bridge.emit('tour', tourStep === null ? null : (tourItems[tourStep]?.object ?? null));
  }, [bridge, tourStep, tourItems, ready]);
  const startTour = () => {
    setGuideOpen(false);
    setTourStep(0);
  };
  const endTour = () => {
    setTourStep(null);
    if (screen === 'playing') bridge.emit('lock', true);
  };
  // Fresh pictures each time the guide opens (the sky changes over the day).
  useEffect(() => bridge.on('snapshots', setPictures), [bridge]);
  useEffect(() => {
    if (guideOpen && ready) bridge.emit('snapshotRequest', true);
  }, [bridge, guideOpen, ready]);
  // The browser refused to capture the mouse (e.g. Esc closed a console: Esc is not a "click"):
  // show the pause menu rather than a loose cursor; Enter or a click carries on.
  useEffect(
    () =>
      bridge.on('lockFailed', () => {
        if (screen === 'playing' && !consoleOpen && !guideOpen && tourStep === null && !dayDone) setScreen('paused');
      }),
    [bridge, screen, consoleOpen, guideOpen, tourStep, dayDone],
  );
  // The guide book on the back counter opens the guide.
  useEffect(() => bridge.on('use', (id) => id === 'guide-book' && setGuideOpen(true)), [bridge]);
  // Esc frees the mouse (the browser does that itself): that opens the pause menu, unless a
  // console, the Data Lens or the guide took the mouse.
  const wasLocked = useRef(false);
  useEffect(() => {
    if (wasLocked.current && !locked && screen === 'playing' && !consoleOpen && !lens && !guideOpen && !dayDone) {
      setScreen('paused');
    }
    wasLocked.current = locked;
  }, [locked, screen, consoleOpen, lens, guideOpen, dayDone]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // In the pause menu, Enter carries on (a key the browser accepts for capturing the mouse;
      // Esc is not one, so Esc does not leave the menu).
      if (e.key === 'Enter' && screen === 'paused' && !guideOpen && tourStep === null) {
        e.preventDefault();
        play();
        return;
      }
      if (e.key !== 'Escape' || e.defaultPrevented) return;
      if (tourStep !== null) endTour();
      else if (guideOpen) {
        setGuideOpen(false);
        if (screen === 'playing') bridge.emit('lock', true);
      } else if (screen === 'paused') return;
      else if (screen === 'playing' && lens && !consoleOpen) setLens(false);
      else if (screen === 'playing' && !consoleOpen && !dayDone) setScreen('paused');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    let cancelled = false;
    let game: { destroy: () => void } | null = null;
    import('../game/truck/TruckGame').then(({ TruckGame }) => {
      if (cancelled || !parentRef.current) return;
      game = new TruckGame(parentRef.current, bridge, startOnLoad.current);
      if (import.meta.env.DEV) (window as unknown as { __truck?: unknown }).__truck = game;
      setReady(true);
    });
    return () => {
      cancelled = true;
      game?.destroy();
    };
  }, [bridge]);

  return (
    <div className="truck-app">
      <div className="truck-view" ref={parentRef}>
        {ready && screen !== 'title' && tourStep === null && (
          <>
            <ClockWidget
              clock={day.clock}
              shut={shut}
              dayNumber={past.length + 1}
              date={day.date}
              served={day.served.length}
              total={day.orders.length}
              lens={lens}
              raining={rain > 0.15}
              t={t}
            />
            <button
              className="hud-menu"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setScreen('paused')}
              title={t.pausedTitle}
            >
              <kbd>Esc</kbd> {t.menuLabel}
            </button>
          </>
        )}

        {ready && knocking && !consoleOpen && !dayDone && !menuOpen && (
          <p className="knock-alert" role="status">
            🚪 {t.knockAlert}
          </p>
        )}
        {ready && dayDone && !front && !consoleOpen && !menuOpen && (
          <DaySummary
            db={db}
            day={day}
            past={past}
            dateLabel={t.dateLabel(day.date)}
            lang={lang}
            t={t}
            onNewDay={() => startNextDay(past, day)}
            onReplay={() => restartDay(day)}
          />
        )}
        {ready && !consoleOpen && !menuOpen && lens && (
          <>
            <DataLens cards={lensCards} summaries={summaries} needed={orderTables} view={view} aimed={aimed as LensCard['object'] | null} t={t} />
            <p className="lens-hint">🔍 {t.lensClickHint}</p>
          </>
        )}
        {ready && !consoleOpen && !dayDone && !menuOpen && (
          <>
            <div className={aimed ? 'crosshair crosshair-on' : 'crosshair'} aria-hidden="true" />
            {aimed && <p className="aim-label">E · {t.truckThings[aimed]}</p>}
          </>
        )}
        {front && order && anchor && !consoleOpen && !lens && !menuOpen && view.width > 0 && (
          <div
            className="order-bubble"
            role="status"
            aria-label={t.truckOrder}
            style={bubbleStyle(anchor, view.width, view.height)}
          >
            {mood && patienceLeft !== null && (
              <p className={`order-mood order-mood-${mood}`} title={t.moodLabels[mood]}>
                <span aria-hidden="true">{t.moods[mood]}</span>
                <span className="order-patience" aria-label={t.moodLabels[mood]}>
                  <span style={{ width: `${Math.round(patienceLeft * 100)}%` }} />
                </span>
              </p>
            )}
            <p className="order-bubble-text">{orderLine(order, lang)}</p>
            {answerWhere && <p className="order-bubble-hint">👉 {t.truckAnswerAt(answerWhere)}</p>}
          </div>
        )}
        {overlays}
        {screen === 'title' && tourStep === null && (
          <TitleScreen
            dayNumber={past.length + 1}
            clock={day.clock}
            worldReady={ready}
            dataReady={dataReady}
            dataError={dbError}
            onStart={play}
            onGuide={() => setGuideOpen(true)}
            onTour={startTour}
            lang={lang}
            setLang={setLang}
            t={t}
          />
        )}
        {screen === 'playing' && (!ready || !dataReady) && <LoadingScreen t={t} />}
        {screen === 'paused' && tourStep === null && (
          <PauseMenu
            onResume={play}
            onGuide={() => setGuideOpen(true)}
            onTour={startTour}
            lens={lens}
            onLens={() => {
              setLens((on) => !on);
              play();
            }}
            onRestart={() => restartDay(day)}
            onTitle={() => setScreen('title')}
            lang={lang}
            setLang={setLang}
            t={t}
          />
        )}
        {tourStep !== null && (
          <TruckTour items={tourItems} step={tourStep} onStep={setTourStep} onClose={endTour} t={t} />
        )}
        {guideOpen && (
          <Guide
            lang={lang}
            t={t}
            pictures={pictures}
            onTour={startTour}
            onClose={() => {
              setGuideOpen(false);
              if (screen === 'playing') bridge.emit('lock', true);
            }}
          />
        )}
      </div>
    </div>
  );
}

/** The order bubble: a fixed width, kept on screen, with its tail pointing at the customer's head. */
const BUBBLE_WIDTH = 288;
function bubbleStyle(anchor: { x: number; y: number }, viewWidth: number, viewHeight: number): React.CSSProperties {
  const width = Math.min(BUBBLE_WIDTH, viewWidth * 0.8);
  const { centre, tail } = placeOnScreen(anchor.x * viewWidth, width, viewWidth);
  return {
    left: centre,
    width,
    bottom: viewHeight * (1 - anchor.y),
    ['--tail' as string]: `${tail}px`,
  };
}


/** The time of day as a little picture, from the clock (morning → night, like the sky). */
function skyIcon(clock: number): string {
  if (clock >= CLOSING - 20) return '🌙';
  if (clock >= CLOSING - 75) return '🌇';
  if (clock >= 12 * 60 && clock < 14 * 60 + 30) return '☀️';
  return '🌤';
}

/** Top left: the clock, how far through the day it is, the day, and the orders served. */
function ClockWidget(props: {
  clock: number;
  shut: boolean;
  dayNumber: number;
  date: string;
  served: number;
  total: number;
  lens: boolean;
  raining: boolean;
  t: UiText;
}) {
  const { clock, shut, dayNumber, date, served, total, lens, raining, t } = props;
  const progress = Math.min(1, Math.max(0, (clock - OPENING) / (CLOSING - OPENING)));
  return (
    <div className={shut ? 'hud-clock hud-clock-shut' : 'hud-clock'} title={t.clockTitle}>
      <div className="hud-clock-top">
        <span className="hud-clock-icon" aria-hidden="true">
          {raining ? '🌧' : skyIcon(clock)}
        </span>
        <span className="hud-clock-time">{formatClock(clock)}</span>
        {shut && <span className="hud-clock-closed">{t.closedLabel}</span>}
        {lens && <span className="hud-clock-lens">🔍 {t.dataLens}</span>}
        {raining && !lens && !shut && <span className="hud-clock-rain">{t.raining}</span>}
      </div>
      <div className="hud-clock-bar" aria-hidden="true">
        <span style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="hud-clock-bottom" title={t.dayTitle}>
        <span>{t.dayShort(dayNumber, date)}</span>
        <span className="hud-clock-served">
          ☕ {served}/{total}
        </span>
      </div>
    </div>
  );
}

