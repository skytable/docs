cd ..
git clone -b gh-pages https://github.com/skytable/docs.git ghp
cd -
rm -rf ../ghp/*
mv build/* ../ghp/ -v
cd ../ghp
git checkout gh-pages
git config --global user.email "$BOT_MAIL"
git config --global user.name "$BOT_USER"
C_USER=$(git show -s --format='%an' HEAD)
C_MAIL=$(git show -s --format='%ae' HEAD)
{
    git add . && git commit -m "Deployed ${GITHUB_SHA}"
    eval '${BOT_API}'
} >>/dev/null