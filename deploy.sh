#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

echo 'www.ilyas.in.th' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Rathawut-l/ilyas-blog.git master:gh-pages

cd -
