/**
 * The palette (GAME_DESIGN.md §7): the only colours the 3D world uses. Since 21 Nov 2026 the game
 * is ORDER BY 2077, a cyberpunk night city, so the inks are dark metals, wet asphalt and neon. The
 * ink names are kept from the earlier risograph palette (paper, ink, teal…) so every model keeps
 * its role: "paper" is now a dark steel panel, "teal" a cyan neon, "mustard" amber, "red" hot pink.
 * Our own palette (no third-party licence).
 */
export const RISO = {
  // Steel panels (the truck's walls) and light trim.
  paper: '#2e3352',
  paperShade: '#2a2f4a',
  white: '#c9d4f0',
  // Ink (outlines, dark metal): near black with a blue tint.
  ink: '#0a0c18',
  inkSoft: '#22273f',
  // Hot pink neon.
  red: '#ff2e88',
  redDark: '#9a1450',
  pink: '#ff8cc6',
  // Cyan neon.
  teal: '#0fb5c4',
  tealDark: '#0b4a5c',
  tealLight: '#62f4ff',
  // Amber neon.
  mustard: '#ffb21e',
  mustardDark: '#b8650a',
  // Night haze.
  peach: '#2a1840',
  lilac: '#4b2f7a',
  // Wet asphalt.
  grass: '#151827',
  grassDark: '#0f1120',
  // Dark composite "wood" (counters, benches).
  wood: '#4a3a52',
  woodDark: '#2b2236',
  // Skin tones.
  skin1: '#f0c4a2',
  skin2: '#c98d68',
  skin3: '#8a573c',
} as const;

export type Ink = keyof typeof RISO;
