#!/usr/bin/env bash
# One-time cleanup (owner's request, 25 Nov 2026): rewrite the history so that no commit has
# Claude as its author, which removes Claude from GitHub's contributors list.
# Run it yourself, on your own computer, AFTER the pull request that adds this file is merged:
#   bash scripts/remove-claude-author.sh
# It makes a backup first, asks before it pushes, and force-pushes all branches and tags.
# (GitHub's branch protection on main may need to be switched off for a minute.)
set -euo pipefail

REPO_URL="https://github.com/Neinstat/query-truck-game.git"
OWNER_IDENTITY='Neinstat <137234298+Neinstat@users.noreply.github.com>'
CLAUDE_IDENTITY='Claude <noreply@anthropic.com>'
WORK="$(mktemp -d)"

command -v git >/dev/null || { echo "git is not installed"; exit 1; }
if ! command -v git-filter-repo >/dev/null; then
  echo "Installing git-filter-repo (needs Python/pip)…"
  python3 -m pip install --user git-filter-repo
  export PATH="$HOME/.local/bin:$PATH"
fi

echo "1/4 Backup (mirror clone) → $WORK/backup.git"
git clone --mirror "$REPO_URL" "$WORK/backup.git"

echo "2/4 Fresh clone to rewrite → $WORK/clean"
git clone --mirror "$REPO_URL" "$WORK/clean"
cd "$WORK/clean"
echo "$OWNER_IDENTITY $CLAUDE_IDENTITY" > "$WORK/mailmap.txt"

echo "3/4 Rewriting authors: $CLAUDE_IDENTITY → $OWNER_IDENTITY"
git filter-repo --mailmap "$WORK/mailmap.txt" --force
echo "Authors left in main:"
git log main --format='%an' | sort | uniq -c

read -r -p "4/4 Force-push ALL branches and tags to $REPO_URL ? Type YES to continue: " answer
[ "$answer" = "YES" ] || { echo "Stopped. Nothing was pushed. Backup: $WORK/backup.git"; exit 0; }
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"
# Pull-request refs (refs/pull/*) are read-only on GitHub, so only branches and tags are pushed.
git push --force origin 'refs/heads/*:refs/heads/*' 'refs/tags/*:refs/tags/*'
echo "Done. Delete your old local clones and clone again. The contributors list can take a few hours to update."
