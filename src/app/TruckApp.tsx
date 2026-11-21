import { useEffect, useMemo, useRef, useState } from 'react';
import { ui, useLang } from '../i18n';
import { LANGS } from '../sql-core/feedback';
import { orderLine } from '../sql-core/truck/orders';
import { TruckBridge, type LensCard } from '../game/truck/bridge';
import { STATIONS } from '../sql-core/stations';
import { DataLens, useTableSummaries } from './DataLens';
import { placeOnScreen } from './overlayLayout';
import { restartDay, SKIP_TITLE_KEY, startNextDay, useTruckShift } from './useTruckShift';
import { Guide, LoadingScreen, PauseMenu, TitleScreen } from './Menus';
import { DaySummary } from './DaySummary';
import { CLOSING, formatClock } from '../sql-core/truck/day';

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

/** SQL Valley: the food truck, first person in 3D (GAME_DESIGN.md §7). */
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
  // Time stops in the truck while a menu is open, and until the records are open.
  const [dataReady, setDataReady] = useState(false);
  const menuOpen = screen !== 'playing' || guideOpen || !ready || !dataReady;
  const { front, order, answerWhere, orderTables, db, dbError, day, orders, past, dayDone, knocking, mood, patienceLeft, consoleOpen, openTable, overlays } =
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
  });
  const [lens, setLens] = useState(false);
  const [lensCards, setLensCards] = useState<LensCard[]>([]);
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
      if (e.key !== 'Escape' || e.defaultPrevented) return;
      if (guideOpen) {
        setGuideOpen(false);
        if (screen === 'playing') bridge.emit('lock', true);
      } else if (screen === 'paused') play();
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
      <header className="truck-hud">
        <span className="truck-title">🚚 Rolling Roast</span>
        <span className={shut ? 'truck-clock truck-clock-closed' : 'truck-clock'} title={t.clockTitle}>
          🕙 {formatClock(day.clock)}
          {shut && ` · ${t.closedLabel}`}
        </span>
        <span className="truck-day" title={t.dayTitle}>
          📅 {t.dayLabel(past.length + 1, day.date, day.served.length, day.orders.length)}
        </span>
        <span className="truck-controls">{t.truckControls}</span>
        <button
          className="lens-button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => setScreen('paused')}
          title={t.pausedTitle}
        >
          ☰ Menu <kbd>Esc</kbd>
        </button>
        <button
          className={lens ? 'lens-button lens-button-on' : 'lens-button'}
          aria-pressed={lens}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => setLens((on) => !on)}
          title={t.lensHint}
        >
          🔍 {t.dataLens} <kbd>L</kbd>
        </button>
        <div className="lang-switch" role="group" aria-label={t.language}>
          {LANGS.map((code) => (
            <button
              key={code}
              className={code === lang ? 'lang-button active' : 'lang-button'}
              aria-pressed={code === lang}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </header>
      <div className="truck-view" ref={parentRef}>

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
            <DataLens cards={lensCards} summaries={summaries} needed={orderTables} view={view} onOpen={openTable} t={t} />
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
        {screen === 'title' && (
          <TitleScreen
            dayNumber={past.length + 1}
            clock={day.clock}
            worldReady={ready}
            dataReady={dataReady}
            dataError={dbError}
            onStart={play}
            onGuide={() => setGuideOpen(true)}
            lang={lang}
            setLang={setLang}
            t={t}
          />
        )}
        {screen === 'playing' && (!ready || !dataReady) && <LoadingScreen t={t} />}
        {screen === 'paused' && (
          <PauseMenu
            onResume={play}
            onGuide={() => setGuideOpen(true)}
            onRestart={() => restartDay(day)}
            onTitle={() => setScreen('title')}
            lang={lang}
            setLang={setLang}
            t={t}
          />
        )}
        {guideOpen && (
          <Guide
            lang={lang}
            t={t}
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

