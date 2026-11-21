/**
 * Plays the game's sounds (src/audio/sound.ts) for what happens in the truck: the game reports
 * events through the bridge, and the app's own state says when a console opens, the Manager is
 * knocking, or the day is over. Audio starts with the player's first click or key (a browser rule).
 */
import { useEffect, useRef } from 'react';
import { sound } from '../audio/sound';
import type { TruckBridge } from '../game/truck/bridge';

export function useSound(
  bridge: TruckBridge,
  state: { knocking: boolean; consoleOpen: boolean; dayDone: boolean; lens: boolean; paused: boolean },
): void {
  const { knocking, consoleOpen, dayDone, lens, paused } = state;

  // Audio may only start after the player's first click or key press.
  useEffect(() => {
    const start = () => sound.start();
    window.addEventListener('pointerdown', start, true);
    window.addEventListener('keydown', start, true);
    // Every button clicks softly.
    const click = (e: Event) => {
      if (e.target instanceof Element && e.target.closest('button')) sound.play('click');
    };
    window.addEventListener('click', click, true);
    return () => {
      window.removeEventListener('pointerdown', start, true);
      window.removeEventListener('keydown', start, true);
      window.removeEventListener('click', click, true);
    };
  }, []);

  // What the game reports.
  useEffect(() => {
    const offs = [
      bridge.on('arrive', () => sound.play('arrive')),
      bridge.on('step', () => sound.play('step')),
      bridge.on('weather', (rain) => sound.setRain(rain)),
      bridge.on('thunder', () => sound.thunder()),
      bridge.on('serve', () => sound.play('sale')),
      bridge.on('gaveUp', () => sound.play('gaveUp')),
      bridge.on('door', () => sound.play('door')),
      bridge.on('pause', (p) => sound.setMuffled(p)),
    ];
    // The weather may have been sent before this hook listened.
    const rain = bridge.last('weather');
    if (rain !== undefined) sound.setRain(rain);
    return () => offs.forEach((off) => off());
  }, [bridge]);

  // The Manager knocks again every few seconds until the door is opened.
  useEffect(() => {
    if (!knocking || consoleOpen || dayDone || paused) return;
    sound.play('knock');
    const timer = window.setInterval(() => sound.play('knock'), 6500);
    return () => window.clearInterval(timer);
  }, [knocking, consoleOpen, dayDone, paused]);

  // The tablet (or another console) opening and closing, the Data Lens, and the end of the day.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) return;
    sound.play(consoleOpen ? 'open' : 'close');
  }, [consoleOpen]);
  useEffect(() => {
    if (!first.current && lens) sound.play('lens');
  }, [lens]);
  useEffect(() => {
    if (!first.current && dayDone) sound.play('dayEnd');
  }, [dayDone]);
  useEffect(() => {
    first.current = false;
  }, []);
}
