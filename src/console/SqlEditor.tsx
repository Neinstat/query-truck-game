import { lazy, Suspense, type ComponentProps } from 'react';

// CodeMirror is big, so it loads on its own the first time a console opens
// (not with the first page), see 8.1c.
const Impl = lazy(() => import('./SqlEditorImpl'));

/** SQL editor with syntax highlighting and table/column autocomplete (loaded on demand). */
export function SqlEditor(props: ComponentProps<typeof Impl>) {
  return (
    <Suspense fallback={<div className="editor" aria-label={props.label} />}>
      <Impl {...props} />
    </Suspense>
  );
}
