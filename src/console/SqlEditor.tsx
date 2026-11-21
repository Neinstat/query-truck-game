import { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { keymap } from '@codemirror/view';
import { Prec } from '@codemirror/state';
import { sql, PostgreSQL } from '@codemirror/lang-sql';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

/** Neon colours for SQL on the dark tablet (ORDER BY 2077). */
const neonHighlight = HighlightStyle.define([
  { tag: tags.keyword, color: '#ff5fa8', fontWeight: '600' },
  { tag: [tags.string, tags.special(tags.string)], color: '#ffc94d' },
  { tag: [tags.number, tags.bool, tags.null], color: '#6dffb0' },
  { tag: [tags.comment, tags.lineComment, tags.blockComment], color: '#7d87ab', fontStyle: 'italic' },
  { tag: [tags.operator, tags.punctuation], color: '#a9b3d6' },
  { tag: [tags.typeName, tags.standard(tags.name)], color: '#b9a2ff' },
  { tag: [tags.name, tags.propertyName], color: '#8ff6ff' },
]);

const darkEditor = EditorView.theme(
  {
    '&': { color: '#e3ebff', backgroundColor: '#0d1024' },
    '.cm-content': { caretColor: '#62f4ff' },
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: '#62f4ff' },
    '.cm-activeLine': { backgroundColor: 'rgba(98, 244, 255, 0.06)' },
    '.cm-activeLineGutter': { backgroundColor: 'rgba(98, 244, 255, 0.1)', color: '#62f4ff' },
    '.cm-gutters': { backgroundColor: '#0d1024', color: '#5b6488', border: 'none' },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection': { backgroundColor: 'rgba(255, 46, 136, 0.3)' },
    '.cm-matchingBracket': { backgroundColor: 'rgba(98, 244, 255, 0.2)', outline: 'none' },
    '.cm-tooltip': { backgroundColor: '#151930', border: '1px solid #2c3352', color: '#e3ebff' },
    '.cm-tooltip-autocomplete > ul > li[aria-selected]': { backgroundColor: '#ff2e88', color: '#0b0d1a' },
  },
  { dark: true },
);

type Props = {
  initialValue: string;
  onChange: (value: string) => void;
  onRun: () => void;
  /** Table → column names, for autocomplete. */
  schema: Record<string, string[]>;
  label: string;
};

/** SQL editor with syntax highlighting and table/column autocomplete. */
export function SqlEditor({ initialValue, onChange, onRun, schema, label }: Props) {
  const host = useRef<HTMLDivElement>(null);
  // Keep the latest callbacks without recreating the editor.
  const callbacks = useRef({ onChange, onRun });
  callbacks.current = { onChange, onRun };

  useEffect(() => {
    const view = new EditorView({
      parent: host.current!,
      doc: initialValue,
      extensions: [
        basicSetup,
        darkEditor,
        syntaxHighlighting(neonHighlight),
        EditorView.lineWrapping,
        sql({ dialect: PostgreSQL, schema, upperCaseKeywords: true }),
        Prec.highest(
          keymap.of([
            {
              key: 'Mod-Enter',
              run: () => {
                callbacks.current.onRun();
                return true;
              },
            },
          ]),
        ),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) callbacks.current.onChange(update.state.doc.toString());
        }),
        EditorView.contentAttributes.of({ 'aria-label': label }),
      ],
    });
    return () => view.destroy();
    // The editor is created once per mount; the parent remounts it for a new level.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="editor" ref={host} />;
}
