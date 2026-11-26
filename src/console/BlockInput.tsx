import { useState } from "react";
import { dropBlock } from "./blockMoves";
import type { UiText } from "../i18n";

type Props = {
  /** Every block offered, in display order (may include distractors). */
  blocks: string[];
  /** Called with the query built so far (blocks joined by spaces). */
  onChange: (sql: string) => void;
  t: UiText;
};

/**
 * Build a query by tapping word blocks (Chapter 0).
 * Tap a block in the tray to add it; tap a placed block to send it back.
 * Clicks instead of drag-and-drop: works the same with mouse, touch and keyboard.
 */
export function BlockInput({ blocks, onChange, t }: Props) {
  // Indexes into `blocks`, in the order the player placed them.
  const [placed, setPlaced] = useState<number[]>([]);

  // Drag and drop (9.5): a gap lights up while a card is dragged over it; clicking still works.
  const [gap, setGap] = useState<number | null>(null);
  const drop = (e: React.DragEvent, at: number) => {
    e.preventDefault();
    setGap(null);
    const block = Number(e.dataTransfer.getData("text/plain"));
    if (Number.isInteger(block) && block >= 0 && block < blocks.length)
      update(dropBlock(placed, block, at));
  };
  const dragStart = (e: React.DragEvent, block: number) => {
    e.dataTransfer.setData("text/plain", String(block));
    e.dataTransfer.effectAllowed = "move";
  };
  const gapProps = (at: number) => ({
    className: gap === at ? "block-gap block-gap-on" : "block-gap",
    onDragOver: (e: React.DragEvent) => {
      e.preventDefault();
      setGap(at);
    },
    onDragLeave: () => setGap((g) => (g === at ? null : g)),
    onDrop: (e: React.DragEvent) => drop(e, at),
  });

  function update(next: number[]) {
    setPlaced(next);
    onChange(next.map((i) => blocks[i]).join(" "));
  }

  return (
    <div className="blocks">
      <div
        className="block-answer"
        aria-label={t.blocksAnswer}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => drop(e, placed.length)}
      >
        {placed.length === 0 && (
          <span className="block-placeholder">{t.blocksEmpty}</span>
        )}
        {placed.map((blockIndex, position) => (
          <span key={blockIndex} className="block-slot">
            <span {...gapProps(position)} aria-hidden="true" />
            <button
              className="block block-placed"
              draggable
              onDragStart={(e) => dragStart(e, blockIndex)}
              onClick={() => update(placed.filter((_, p) => p !== position))}
            >
              {blocks[blockIndex]}
            </button>
          </span>
        ))}
        {placed.length > 0 && (
          <span {...gapProps(placed.length)} aria-hidden="true" />
        )}
      </div>

      <div className="block-tray" aria-label={t.blocksTray}>
        {blocks.map((block, i) => {
          const used = placed.includes(i);
          return (
            <button
              key={i}
              className="block"
              disabled={used}
              draggable={!used}
              onDragStart={(e) => dragStart(e, i)}
              onClick={() => update([...placed, i])}
            >
              {block}
            </button>
          );
        })}
      </div>

      <div className="block-footer">
        <span className="shortcut">{t.blocksHelp}</span>
        {placed.length > 0 && (
          <button className="link-button" onClick={() => update([])}>
            {t.blocksClear}
          </button>
        )}
      </div>
    </div>
  );
}
