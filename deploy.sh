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
for t in bcit conference ; do
    mkdir -p docs/wordpress/tag/$t/feed/
    ln -s ../../../../tags/$t/index.xml docs/wordpress/tag/$t/feed/index.xml
done

# make sure wordpress category feeds continue to work
# http://stephaniehobson.ca/wordpress/category/webdesign/feed/
for c in webdesign personal ; do
    mkdir -p docs/wordpress/category/$c/feed/
    ln -s ../../../../tags/$c/index.xml docs/wordpress/category/$c/feed/index.xml
done

# make sure wordpress site feed continues to work
# http://stephaniehobson.ca/feed/
mkdir -p docs/feed/
ln -s ../index.xml docs/feed/index.xml

git add *
git commit -m "Generate static site"
# push to master
git push origin master
