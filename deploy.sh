#!/bin/bash

# create files in /static that hugo needs
gulp deploy
# delete the previous deploy
rm -rf public
# generate the static site
hugo

# make sure wordpress tag feeds continue to work
# http://stephaniehobson.ca/wordpress/tag/conference/feed/
for t in bcit conference ; do
    mkdir -p public/wordpress/tag/$t/feed/
    ln -s ../../../../tags/$t/index.xml public/wordpress/tag/$t/feed/index.xml
done

# make sure wordpress category feeds continue to work
# http://stephaniehobson.ca/wordpress/category/webdesign/feed/
for c in webdesign personal ; do
    mkdir -p public/wordpress/category/$c/feed/
    ln -s ../../../../tags/$c/index.xml public/wordpress/category/$c/feed/index.xml
done

# make sure wordpress site feed continues to work
# http://stephaniehobson.ca/feed/
mkdir -p public/feed/
ln -s ../index.xml public/feed/index.xml

git add *
git commit -m "Generate static site"
# push to master
git push origin master
