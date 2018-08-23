#!/bin/bash

# create files in /static that hugo needs
gulp deploy
# delete the previous deploy
rm -rf docs
# generate the static site
hugo

# check CNAME record included
echo "Checking for CNAME"
ls docs/CNAME || exit 1
echo "CNAME found"

# make sure wordpress tag feeds continue to work
# http://stephaniehobson.ca/wordpress/tag/conference/feed/
for t in accessibility accomplishment analytics bcit code conference links mozilla personal presentation slides video webdesign ; do
    mkdir -p docs/wordpress/tag/$t/feed/
    cp -p docs/tags/$t/index.xml docs/wordpress/tag/$t/feed/index.xml
done

# make sure wordpress category feeds continue to work
# http://stephaniehobson.ca/wordpress/category/webdesign/feed/
for c in webdesign personal ; do
    mkdir -p docs/wordpress/category/$c/feed/
    cp -p docs/tags/$c/index.xml docs/wordpress/category/$c/feed/index.xml
done

# make sure wordpress site feed continues to work
# http://stephaniehobson.ca/feed/
mkdir -p docs/feed/
cp -p docs/index.xml docs/feed/index.xml

git add *
git commit -m "Generate static site"
# push to master
git push origin master
