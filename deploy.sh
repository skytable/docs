#!/bin/bash
function commit() {
    {
        git add . && git commit -m "${1}"
        eval '${BOT_API}'
    } >>/dev/null
}

git config --global user.email "$BOT_MAIL"
git config --global user.name "$BOT_USER"
commit "Updated docs from upstream"
cd ..
git clone -b gh-pages https://github.com/skytable/docs.git ghp
cd -
rm -rf ../ghp/*
mv build/* ../ghp/ -v
cd ../ghp
git checkout gh-pages
C_USER=$(git show -s --format='%an' HEAD)
C_MAIL=$(git show -s --format='%ae' HEAD)
commit "Deployed ${GITHUB_SHA}"
