#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="/Users/yongyuan/Documents/New project/lvp-poster"
BACKUP_PAGE="/Users/yongyuan/Documents/New project/english-quote-log/index.html"

cd "$REPO_DIR"

node scripts/update-english-quotes.mjs

if git diff --quiet -- english-quote-log/index.html; then
  echo "No new quote record to commit."
  exit 0
fi

git add english-quote-log/index.html
git commit -m "Auto update English quote log"
git push origin main

cp "$REPO_DIR/english-quote-log/index.html" "$BACKUP_PAGE"
echo "English quote log updated and pushed."
