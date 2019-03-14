#!/bin/bash
prjname="tite-notice-markup"

echo "=============================="
echo ${prjname}
echo "=============================="

# run on a local server with gulpfile.js
# sudo gulp watch

# get commit message
printf "\n"
read -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m $commitmsg
git push

exit
