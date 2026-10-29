#!/usr/bin/env sh
# Allowlisted files only; run in repository root from CI.
set -eu
rm -rf preview-dist
mkdir -p preview-dist/styles preview-dist/tokens
cp index.html documents.html preview-dist/
cp styles/*.css preview-dist/styles/
cp tokens/tokens.json preview-dist/tokens/
mkdir -p preview-dist/assets
for asset in '로고_smartecm.png' '로고_smartecm_w.png' '패키지이미지_배경없음.png'; do
 cp "assets/$asset" preview-dist/assets/
done
mkdir -p preview-dist/scripts
cp scripts/document-library.js preview-dist/scripts/
echo 'Prepared preview-dist (public-safe files only; review content before deployment)'
