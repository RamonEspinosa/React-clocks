#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add dist -f
git commit -m 'Deploy to GH pages'

git subtree push --prefix dist origin gh-pages