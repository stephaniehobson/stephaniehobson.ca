---
title: Accessibility Problem with Gilder/Levin Image Replacement Method
aliases:
  - /wordpress/2008/08/11/accessibility-problem-with-gilderlevin-image-replacement-method/
date: 2008-08-11 21:03:13
year: "2008"
id: 55
tags:
  - accessibility
  - webdesign
---

I have a friend who lives his life in low contrast.  He is frequently the inspiration I need to go the extra mile and find an accessible solution to a programing quandary. A few weeks ago I had the good fortune to get to visit him and we cruised around the internet while drinking Rusty Nails so I could walk in his shoes for a bit.

His computer is set up to use one of Windows XP's high contrast colour schemes and he also makes use of IE's ability to override a website's CSS.

He started by showing me his university's home page and complaining about the large black areas which (on my computer) corresponded to the header and main navigation.  After a quick look at the code I got the sinking feeling I knew exactly what was happening, and a quick look at the BCIT home page confirmed it.  IE7 was giving any elements with a background image defined a black background regardless of the background colour they were assigned in the element.

The [Gilder/Levin method](https://www.google.com/search?q=gilder+levin+image+replacement&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a) basically positions a span with a background image over top of the text you want to replace.  In theory, if images are not being displayed the text beneath will show through the otherwise transparent span.  IE gives these spans a black background even though they should be transparent.

The screen cap below show the BCIT home page, with the black areas corresponding to span tags using the Gilder/Levin method to place images.  You can also see that we've changed all of IE7's accessibility settings to white in an attempt to figure out which one is causing the change without success:

[![Accessibility Problem](https://farm4.static.flickr.com/3001/2756056310_cf0f527b51.jpg)](https://www.flickr.com/photos/stephaniehobson/2756056310/ "Accessibility Problem by Stephanie Hobson, on Flickr")

I tried many things but nothing could be done with CSS to fix it.  Considering most image replacement techniques use background images of one form or another I imagine the problem happens quite frequently.  My friend was still able to navigate (albeit uncomfortably) by hovering his mouse over the navigation menus and reading the tool tips.

The moral of this story could be something about roads to hell and good intentions, but I think the real lesson here is that all accessibility testing should be done over Rusty Nails.  Go buy yourself some Drambuie.
