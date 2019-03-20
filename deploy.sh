#!/bin/bash
prjname="tite-notice-markup"

echo "=============================="
echo ${prjname}
echo "=============================="

# run on a local server with gulpfile.js
trap 'echo Stop gulp-watch' SIGINT
npm update caniuse-lite browserslist
sudo gulp watch
trap SIGINT

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg
git add .

# commit
if [ -z "$commitmsg" ]
then
    echo "commit message is empty"
    git commit -m "Add files via upload"
else
    git commit -m "$commitmsg"
fi

git push

exit
