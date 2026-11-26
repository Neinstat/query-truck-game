import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ui, useLang, type UiText } from '../i18n';
import { orderLine } from '../sql-core/truck/orders';
import { TruckBridge, type LensCard } from '../game/truck/bridge';
import { STATIONS } from '../sql-core/stations';
import { DataLens, useTableSummaries } from './DataLens';
import { placeOnScreen } from './overlayLayout';
import { loadBonus } from './devBonus';
import { mouseLossMeansPause } from './pauseRules';
import { Coach } from './Coach';
import { DatabaseMenu } from './DatabaseMenu';
import { Objectives } from './Objectives';
import { RewardPop } from './RewardPop';
import { servedReward } from './objectives';
import { coachStep, loadCoach, saveCoach, stepsDone, type CoachStepId } from './coach';
import { onboardingPending, setOnboardingPending, startAction } from './onboarding';
import { endPractice, restartDay, skipToDay, SKIP_TITLE_KEY, startNextDay, startNextWeek, startPractice, useTruckShift } from './useTruckShift';
import { DaysScreen } from './DaysScreen';
import { Guide, LoadingScreen, PauseMenu, TitleScreen, TruckTour } from './Menus';
import { guideFor } from './guide';
import { DaySummary } from './DaySummary';
import { WeekCard } from './WeekCard';
import { DifficultyPicker, StartFlow } from './StartFlow';
import { useDifficulty } from './useDifficulty';
import { useSound } from './useSound';
import { DevPanel, devAllowed } from './DevPanel';
import { PLACES, placeForDay } from '../sql-core/truck/places';
import { CLOSING, formatClock, OPENING } from '../sql-core/truck/day';
import { XpCounter } from './XpCounter';
import { ShopScreen } from './ShopScreen';
import { NEW_ITEM_KEY, useShop } from './useShop';
import { dayCoins, itemName, shopItem, totalCoins } from '../sql-core/truck/shop';
import { totalXp, dayXp, levelFor } from '../sql-core/truck/xp';
import { coinsForOrder } from '../sql-core/truck/shop';
import { sound } from '../audio/sound';
import { isFreeMode, isWeekStart, weekOfDay } from '../sql-core/truck/weeks';
import { skipTitleNextLoad } from './useTruckShift';
import { TouchControls } from './TouchControls';
import { AboutScreen, isTouchOnly, PhoneNotice, SettingsScreen } from './InfoScreens';
import { BadgesScreen } from './BadgesScreen';
import { useEggs, useEggToast } from './eggs';
import { eggText, eggTitle } from '../sql-core/truck/eggs';
import { ANALYSIS_DAY, newBadges } from '../sql-core/truck/badges';

/** Every table in the truck, for the Data Lens cards. */
const ALL_TABLES = [...new Set(Object.values(STATIONS).flatMap((s) => s.tables))];

/** After "next day" or "play again" the page reloads straight into the truck (no title). */
/** Where the truck parks today; `?place=harbour` in the address picks a place (for testing). */
function todaysPlace(dayNumber: number) {
  const asked = new URLSearchParams(window.location.search).get('place');
  return PLACES.find((p) => p.id === asked) ?? placeForDay(dayNumber);
}

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

/** Query Truck: the food truck, first person in 3D (GAME_DESIGN.md §7). */
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
  /** The Days screen (from the pause menu): every day so far, and practice runs. */
  const [daysOpen, setDaysOpen] = useState(false);
  /** The truck tour: which stop the camera is at (null: no tour). */
  const [tourStep, setTourStep] = useState<number | null>(null);
  /** A new player's guide and tour (9.2): they cannot be closed early, and the first day starts after them. */
  const [onboarding, setOnboarding] = useState(false);
  /** The first-day coach (9.3): the hints already seen (null: the coach is off). */
  const [coachSeen, setCoachSeen] = useState<CoachStepId[] | null>(loadCoach);
  /** Pictures of the truck's objects for the guide, taken in the game when the guide opens. */
  const [pictures, setPictures] = useState<Record<string, string>>({});
  // Time stops in the truck while a menu is open, and until the records are open.
  const [dataReady, setDataReady] = useState(false);
  /** The developer panel (T): the game keeps running, with the mouse free for the panel. */
  const [devOpen, setDevOpen] = useState(false);
  const canDev = useMemo(() => devAllowed(), []);
  /** The week card of a new week's first morning: shown once, time stands still while it is up. */
  const [weekCardOpen, setWeekCardOpen] = useState(false);
  const weekCardChecked = useRef(false);
  const [difficulty, chooseDifficulty] = useDifficulty();
  /** A new player's backstory and difficulty choice (before the first day), and the picker in the pause menu. */
  const [introOpen, setIntroOpen] = useState(false);
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [badgesOpen, setBadgesOpen] = useState(false);
  /** The Data Lens database menu (D while the lens is on). */
  const [dbMenuOpen, setDbMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const touchMode = useMemo(isTouchOnly, []);
  const [phoneNotice, setPhoneNotice] = useState(touchMode);
  useEffect(() => bridge.emit('touch', touchMode), [bridge, touchMode, ready]);
  const eggs = useEggs();
  const [eggToast, closeEggToast] = useEggToast();
  const menuOpen = introOpen || difficultyOpen || shopOpen || badgesOpen || dbMenuOpen || settingsOpen || aboutOpen || phoneNotice || screen !== 'playing' || guideOpen || daysOpen || tourStep !== null || !ready || !dataReady || weekCardOpen;
  const { front, order, answerWhere, orderTables, db, dbError, day, orders, past, practice, today, dayDone, knocking, mood, patienceLeft, consoleOpen, overlays, devServe, openTable } =
    useTruckShift(bridge, lang, t, menuOpen, difficulty ?? 'grow');
  /** The day number shown: today's, or the day a practice run comes from. */
  const dayNumber = practice ? practice.from : past.length + 1;
  const { week, dayInWeek } = weekOfDay(dayNumber);
  // XP: the stars of all finished days plus today's; a practice run pays nothing (7.1).
  const [bonus] = useState(loadBonus);
  const xp = totalXp(past) + (practice ? 0 : dayXp(day)) + bonus.xp;
  // Coins: like XP, worked out from the days (practice pays nothing); the shop's purchases are saved.
  const earned = totalCoins(past) + (practice ? 0 : dayCoins(day)) + bonus.coins;
  const { shop, balance, look, purchase, putOn } = useShop(earned, skipTitleNextLoad);
  // The page that follows a purchase says what is new.
  const [newItem] = useState(() => {
    try {
      const id = sessionStorage.getItem(NEW_ITEM_KEY);
      sessionStorage.removeItem(NEW_ITEM_KEY);
      return id ? shopItem(id) ?? null : null;
    } catch {
      return null;
    }
  });
  const free = isFreeMode(dayNumber);
  const freeDay = dayNumber - 30;
  // A new week's first morning, before anything has happened: show the week card (not on reloads
  // later in the day, and not in practice runs).
  useEffect(() => {
    if (weekCardChecked.current) return;
    weekCardChecked.current = true;
    if (!practice && isWeekStart(dayNumber) && day.clock <= OPENING && day.served.length === 0 && day.missed.length === 0) {
      setWeekCardOpen(true);
    }
  }, [practice, dayNumber, day]);
  useEffect(() => setDataReady(db !== null), [db]);
  // The orders served before this page load: the game skips those customers.
  /** Closing time, or the day ended early because nobody else is coming. */
  const shut = day.clock >= CLOSING || dayDone;
  const startOnLoad = useRef({
    orders: orders.map((o) => ({ id: o.id, look: o.look })),
    handled: [...day.served.map((s) => s.orderId), ...day.missed],
    clock: day.clock,
    // Practice runs are for the customers' orders: the Manager doesn't come.
    managerDone: day.manager !== null || practice !== null,
    // A different place each day (sql-core/truck/places.ts); a practice is where that day was.
    place: todaysPlace(dayNumber).id,
    // `?rain` in the address: rain today whatever the weather (for testing).
    forceRain: new URLSearchParams(window.location.search).has('rain'),
    // What the upgrades bought in the shop make the truck look like (7.2).
    look,
  });
  const place = todaysPlace(dayNumber);
  useEffect(() => sound.setPlace(place.id), [place.id]);
  const [lens, setLens] = useState(false);
  // A customer's patience runs low: a short warning sound (9.4).
  const wasAnnoyed = useRef(false);
  useEffect(() => {
    if (mood === 'annoyed' && !wasAnnoyed.current && !menuOpen) sound.play('angry');
    wasAnnoyed.current = mood === 'annoyed';
  }, [mood, menuOpen]);
  const coachState = { front: front !== null, consoleOpen, lens, served: day.served.length };
  const coachDone = coachSeen === null || practice ? [] : stepsDone(coachState);
  useEffect(() => {
    if (coachSeen === null || practice) return;
    const next = [...new Set([...coachSeen, ...coachDone])];
    if (next.length === coachSeen.length) return;
    setCoachSeen(next);
    saveCoach(next);
  });
  const coachNow = coachSeen === null || practice || menuOpen ? null : coachStep(coachState, coachSeen);
  // The lens and rewards cards go away by themselves: they never take the mouse, so there is no button.
  useEffect(() => {
    if ((coachNow !== 'rewards' && coachNow !== 'lens') || coachSeen === null) return;
    const step = coachNow;
    const timer = window.setTimeout(() => {
      const next = [...coachSeen, step];
      setCoachSeen(next);
      saveCoach(next);
    }, step === 'lens' ? 12000 : 20000);
    return () => window.clearTimeout(timer);
  }, [coachNow, coachSeen]);
  const [lensCards, setLensCards] = useState<LensCard[]>([]);
  /** How hard it rains (0–1), for the clock card's icon. */
  const [rain, setRain] = useState(0);
  useEffect(() => bridge.on('weather', setRain), [bridge]);
  /** Looking at the wall clock: a pop-up with the time. */
  const [lookClock, setLookClock] = useState(false);
  useEffect(() => bridge.on('lookClock', setLookClock), [bridge]);
  const onFilmShot = useCallback((shot: string | null) => bridge.emit('filmShot', shot), [bridge]);
  // The title screen shows the truck from outside.
  useEffect(() => bridge.emit('showcase', screen === 'title'), [bridge, screen, ready]);
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
  /** Close a menu opened from an object in the truck and go back to looking around. */
  const closeToTruck = (close: () => void) => {
    close();
    if (screen === 'playing') bridge.emit('lock', true);
  };
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
    if (onboarding) {
      // The first guide and tour are done: into the first day.
      setOnboarding(false);
      setOnboardingPending(false);
      saveCoach([]);
      setCoachSeen([]);
      play();
      return;
    }
    if (screen === 'playing') bridge.emit('lock', true);
  };
  /** The required guide, then the required tour (a new player's first start). */
  const beginOnboarding = () => {
    setOnboarding(true);
    setGuideOpen(true);
  };
  // Fresh pictures each time the guide opens (the sky changes over the day).
  useEffect(() => bridge.on('snapshots', setPictures), [bridge]);
  useEffect(() => {
    if (guideOpen && ready) bridge.emit('snapshotRequest', true);
  }, [bridge, guideOpen, ready]);
  // When the browser refuses to capture the mouse (after Esc, which never counts as a click),
  // the game keeps looking around with the free mouse, cursor hidden, and captures it again on
  // the next key or click (TruckGame), so closing anything goes straight back to first person.
  // The guide book on the back counter opens the guide.
  useEffect(() => bridge.on('use', (id) => id === 'guide-book' && setGuideOpen(true)), [bridge]);
  // The phone (shop), the wall calendar (days) and the pinboard (badges): menus that used to sit
  // in the pause menu now live on objects in the truck.
  useEffect(
    () =>
      bridge.on('use', (id) => {
        if (id === 'phone') setShopOpen(true);
        else if (id === 'calendar') setDaysOpen(true);
        else if (id === 'badge-board') setBadgesOpen(true);
      }),
    [bridge],
  );
  // Esc frees the mouse (the browser does that itself): that opens the pause menu, unless a
  // console, the Data Lens or the guide took the mouse.
  const wasLocked = useRef(false);
  useEffect(() => {
    // The phone (shop), calendar (days) and pinboard (badges) free the mouse too: that is not Esc.
    const objectMenuOpen = shopOpen || daysOpen || badgesOpen || dbMenuOpen;
    if (mouseLossMeansPause({ wasLocked: wasLocked.current, locked, playing: screen === 'playing', consoleOpen, lens, guideOpen, dayDone, devOpen, objectMenuOpen })) {
      setScreen('paused');
    }
    wasLocked.current = locked;
  }, [locked, screen, consoleOpen, lens, guideOpen, dayDone, devOpen, shopOpen, daysOpen, badgesOpen, dbMenuOpen]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // In the pause menu, Enter or Esc carries on (after Esc the browser wants one click before
      // the mouse looks around again: the "click to look around" chip says so).
      // The Days screen sits over the pause menu: Esc closes it first.
      if (e.key === 'Escape' && daysOpen) {
        e.preventDefault();
        setDaysOpen(false);
        if (screen === 'playing') bridge.emit('lock', true);
        return;
      }
      if (difficultyOpen || shopOpen || dbMenuOpen) return; // their own keys (Esc closes them)
      if (e.code === 'KeyD' && !e.repeat && lens && screen === 'playing' && !consoleOpen && !dayDone && !menuOpen && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setDbMenuOpen(true);
        return;
      }
      if (badgesOpen && e.key === 'Escape') {
        e.preventDefault();
        setBadgesOpen(false);
        if (screen === 'playing') bridge.emit('lock', true);
        return;
      }
      if ((e.key === 'Enter' || (e.key === 'Escape' && !e.defaultPrevented)) && screen === 'paused' && !guideOpen && !daysOpen && tourStep === null) {
        e.preventDefault();
        play();
        return;
      }
      if (canDev && e.code === 'KeyT' && !e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey && screen === 'playing' && !consoleOpen) {
        e.preventDefault();
        setDevOpen(!devOpen);
        bridge.emit('dev', { cmd: 'panel', open: !devOpen });
        return;
      }
      if (e.key !== 'Escape' || e.defaultPrevented) return;
      if (devOpen) {
        setDevOpen(false);
        bridge.emit('dev', { cmd: 'panel', open: false });
        return;
      }
      if (onboarding && (tourStep !== null || guideOpen)) return; // required: no leaving early
      if (tourStep !== null) endTour();
      else if (guideOpen) {
        setGuideOpen(false);
        if (screen === 'playing') bridge.emit('lock', true);
      }
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
              week={week}
              dayInWeek={dayInWeek}
              freeDay={free ? freeDay : null}
              practice={practice !== null}
              date={day.date}
              served={day.served.length}
              total={day.orders.length}
              lens={lens}
              raining={rain > 0.15}
              place={`${place.icon} ${place.name[lang]}`}
              t={t}
            />
            <XpCounter xp={xp} label={t.levelShort(levelFor(xp).level, lang === 'id' ? levelFor(xp).title.id : levelFor(xp).title.en)} paused={menuOpen} onTick={() => sound.play('xp')} />
            <XpCounter xp={balance} label={t.coinsLabel} icon="🪙" slot={1} paused={menuOpen} onTick={() => sound.play('xp')} />
            {newItem && (
              <div className="truck-toast" role="status">
                ✨ {t.shopNew(itemName(newItem, lang))}
              </div>
            )}
            {canDev && !devOpen && (
              <button
                className="hud-dev"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setDevOpen(true);
                  bridge.emit('dev', { cmd: 'panel', open: true });
                }}
                title="Developer tools (T)"
              >
                🛠 Dev
              </button>
            )}
            <button className="hud-menu" onMouseDown={(e) => e.preventDefault()} onClick={() => setScreen('paused')} title={t.pausedTitle}>
              ☰ {t.menuLabel}
            </button>
          </>
        )}


        {ready && knocking && !consoleOpen && !dayDone && !menuOpen && (
          <p className="knock-alert" role="status">
            🚪 {t.knockAlert}
          </p>
        )}
        {weekCardOpen && screen === 'playing' && ready && dataReady && (
          <WeekCard
            week={week}
            lang={lang}
            t={t}
            onClose={() => {
              setWeekCardOpen(false);
              bridge.emit('lock', true);
            }}
          />
        )}
        {ready && dayDone && !front && !consoleOpen && !menuOpen && (
          <DaySummary
            weekLabel={free ? t.freeLabel(freeDay) : t.weekLabel(week, dayInWeek)}
            db={db}
            day={day}
            past={past}
            dateLabel={t.dateLabel(day.date)}
            lang={lang}
            t={t}
            practice={practice !== null}
            onNewDay={() => (practice ? endPractice() : startNextDay(past, day))}
            badges={practice || !shut ? [] : newBadges(past, day, shop, eggs)}
            onCredits={!practice && dayNumber === ANALYSIS_DAY && day.manager ? () => setAboutOpen(true) : undefined}
            onReplay={() => (practice ? startPractice(past, today, practice.from, practice.mode) : restartDay(day))}
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
            {lookClock && !aimed && (
              <p className="clock-popup" role="status">
                🕐 {t.clockNow(formatClock(day.clock))}
              </p>
            )}
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
                <span className="order-mood-icon" aria-hidden="true">{t.moods[mood]}</span>
                <span className="order-mood-word">{mood === 'annoyed' ? t.angryAlert : t.moodLabels[mood]}</span>
                <span className="order-patience" aria-label={t.moodLabels[mood]}>
                  <span style={{ width: `${Math.round(patienceLeft * 100)}%` }} />
                </span>
              </p>
            )}
            <p className="order-bubble-text">{orderLine(order, lang)}</p>
            {answerWhere && <p className="order-bubble-hint">👉 {t.truckAnswerAt(answerWhere)}</p>}
          </div>
        )}
        {ready && !dayDone && !menuOpen && !consoleOpen && !lens && practice === null && (
          <Objectives day={day} orders={orders} frontId={front?.orderId ?? null} lang={lang} t={t} />
        )}
        {ready && practice === null && (
          <RewardPop
            served={day.served.length}
            reward={() => {
              const last = day.served[day.served.length - 1];
              return last ? servedReward(last, xp, (x) => levelFor(x).level, coinsForOrder) : null;
            }}
            levelTitle={lang === 'id' ? levelFor(xp).title.id : levelFor(xp).title.en}
            text={{ xp: t.rewardXp, coins: t.rewardCoins, levelUp: t.levelUpPop }}
          />
        )}
        {coachNow && <Coach step={coachNow} lang={lang} where={answerWhere ? t.truckAnswerAt(answerWhere) : null} />}
        {overlays}
        {devOpen && (
          <DevPanel
            bridge={bridge}
            day={day}
            past={past}
            place={place}
            hasOrder={Boolean(order)}
            onServe={devServe}
            onRestart={() => restartDay(day)}
            onNextDay={() => startNextDay(past, day)}
            onNextWeek={() => startNextWeek(past, day)}
            onSkipTo={(n) => skipToDay(past, day, n)}
            onClose={() => {
              setDevOpen(false);
              bridge.emit('dev', { cmd: 'panel', open: false });
            }}
          />
        )}
        {screen === 'title' && tourStep === null && !introOpen && !onboarding && (
          <TitleScreen
            dayNumber={dayNumber}
            practice={practice !== null}
            place={place}
            clock={day.clock}
            worldReady={ready}
            dataReady={dataReady}
            dataError={dbError}
            onStart={() => {
              const next = startAction(difficulty !== null, onboardingPending());
              if (next === 'story') setIntroOpen(true);
              else if (next === 'guide') beginOnboarding();
              else play();
            }}
            onSettings={() => setSettingsOpen(true)}
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
            onSettings={() => setSettingsOpen(true)}
            onTitle={() => setScreen('title')}
            lang={lang}
            setLang={setLang}
            t={t}
          />
        )}
        {introOpen && screen === 'title' && (
          <StartFlow
            t={t}
            onShot={onFilmShot}
            onChoose={(d) => {
              chooseDifficulty(d);
              setIntroOpen(false);
              setOnboardingPending(true);
              beginOnboarding();
            }}
          />
        )}
        {shopOpen && (
          <ShopScreen shop={shop} balance={balance} lang={lang} t={t} onBuy={purchase} onEquip={putOn} onClose={() => closeToTruck(() => setShopOpen(false))} />
        )}
        {dbMenuOpen && (
          <DatabaseMenu
            tables={ALL_TABLES}
            summaries={summaries}
            needed={orderTables}
            t={t}
            onOpen={(object, table) => {
              setDbMenuOpen(false);
              setLens(false);
              openTable(object, table);
            }}
            onClose={() => closeToTruck(() => setDbMenuOpen(false))}
          />
        )}
        {badgesOpen && <BadgesScreen input={{ past, shop, eggs }} xp={xp} lang={lang} t={t} onClose={() => closeToTruck(() => setBadgesOpen(false))} />}
        {touchMode && screen === 'playing' && !menuOpen && !consoleOpen && !devOpen && (
          <TouchControls bridge={bridge} t={t} canvasParent={parentRef.current} onLens={() => setLens((on) => !on)} />
        )}
        {settingsOpen && <SettingsScreen lang={lang} setLang={setLang} t={t} onClose={() => setSettingsOpen(false)} onDifficulty={difficulty === null ? undefined : () => setDifficultyOpen(true)} onAbout={() => setAboutOpen(true)} />}
        {aboutOpen && <AboutScreen lang={lang} t={t} onClose={() => setAboutOpen(false)} />}
        {phoneNotice && <PhoneNotice t={t} onDismiss={() => setPhoneNotice(false)} />}
        {eggToast && (
          <div className="egg-toast" role="status" onClick={closeEggToast}>
            <strong>
              {t.eggToast} {eggTitle(eggToast, lang)}
            </strong>
            <span>{eggText(eggToast, lang)}</span>
          </div>
        )}
        {difficultyOpen && (
          <DifficultyPicker
            t={t}
            current={difficulty}
            onChoose={(d) => {
              chooseDifficulty(d);
              setDifficultyOpen(false);
            }}
            onCancel={() => setDifficultyOpen(false)}
          />
        )}
        {daysOpen && (
          <DaysScreen
            past={past}
            today={today}
            practice={practice}
            lang={lang}
            t={t}
            onRestartToday={() => restartDay(day)}
            onPractise={(from, mode) => startPractice(past, today, from, mode)}
            onEndPractice={endPractice}
            onClose={() => closeToTruck(() => setDaysOpen(false))}
          />
        )}
        {tourStep !== null && (
          <TruckTour items={tourItems} step={tourStep} onStep={setTourStep} onClose={endTour} t={t} required={onboarding} />
        )}
        {guideOpen && (
          <Guide
            lang={lang}
            t={t}
            pictures={pictures}
            required={onboarding}
            onTour={startTour}
            onClose={() => {
              setGuideOpen(false);
              // A new player goes straight on to the truck tour.
              if (onboarding) setTourStep(0);
              else if (screen === 'playing') bridge.emit('lock', true);
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
  week: number;
  dayInWeek: number;
  /** Free mode: the number of this day after week 6, otherwise null. */
  freeDay: number | null;
  /** A practice run (Days screen): shown on the card. */
  practice: boolean;
  date: string;
  served: number;
  total: number;
  lens: boolean;
  raining: boolean;
  /** Where the truck parks today. */
  place: string;
  t: UiText;
}) {
  const { clock, shut, week, dayInWeek, freeDay, practice, date, served, total, lens, raining, place, t } = props;
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
        <span>
          {freeDay !== null ? t.freeShort(freeDay, date) : t.weekShort(week, dayInWeek, date)}
          {practice && <span className="hud-clock-practice">{t.practiceTag}</span>}
        </span>
        <span className="hud-clock-served">
          ☕ {served}/{total}
        </span>
      </div>
      <div className="hud-clock-place">{place}</div>
    </div>
  );
}

