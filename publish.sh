#!/bin/sh
# Builds the website from main and publishes it to ka-tch.com by replacing the gh-pages branch's files.
# GitHub Pages serves gh-pages (Settings → Pages → Deploy from a branch → gh-pages / root). No GitHub Actions needed.
# Usage, from this folder:  ./publish.sh
set -e
cd "$(dirname "$0")"
git fetch -q origin
tmp=$(mktemp -d)
git worktree add -q --detach "$tmp/main" origin/main
git worktree add -q -B gh-pages "$tmp/pages" origin/gh-pages
(cd "$tmp/main/site" && npm ci --silent && npm run build)
cd "$tmp/pages"
git rm -r -q .
cp -R "$tmp/main/site/dist/." .
printf 'ka-tch.com' > CNAME     # keeps the custom domain
touch .nojekyll                  # serve folders that start with _ (Astro's _astro)
git add -A .
git commit -q -m "Publish site (built from main $(git -C "$tmp/main" rev-parse --short HEAD))" && git push -q origin gh-pages || echo "Nothing changed; nothing published."
cd - >/dev/null
git worktree remove --force "$tmp/main"
git worktree remove --force "$tmp/pages"
git branch -D gh-pages -q 2>/dev/null || true
echo "Published. ka-tch.com updates in a minute or two."
