---
title: A Dull April Fool's Day
aliases:
  - /wordpress/2011/07/14/dull-april-fools-day/
date: 2011-07-16 18:59:20
year: "2011"
id: 303
tags:
  - accomplishment
  - bcit
  - webdesign
---

There was a rash of black and white April Fool's Day sites this year. We weren't the only ones to do it but I think we did it best, if I do say so myself. There were three parts to our little switch and it wouldn't have been the same without any of them:

* Desaturating the colours in the style sheet.
* Desaturating every image on the site, that's right, all of them.
* Authentic content.

[{{< figure src="oldskool.jpg" alt="The 1960s logo and a photo of giant 'new' computer really make the home page look dated">}}](https://www.flickr.com/photos/stephaniehobson/5584653410/)

**Desaturating the colours in the stylesheet.**

I captured the colours in the stylesheet using the Web Developer Extension in FireFox. Information > View Color Information produces a list of all the colours used in the styles and their hex codes. I took a screen shot of that and then desaturated it in Photoshop by adding a desaturation layer.

Once I had the desaturated colours I did a find and replace for the original hex codes in the style sheet, sampling the new hex codes from my Photoshop document.

**Desaturating all the images.**

All the images? Yep, all the images.

For this I tried out a couple different javascript libraries but ultimately went with [PaintBrushJS](https://mezzoblue.github.com/PaintbrushJS/demo/) by [Dave Shea](https://mezzoblue.com) because it was the only one that could handle background images and didn't add any extra elements to the page. PaintBrushJS uses a combination of javascript and canvas to alter the images.

For backwards compatibility I manually converted all the header and footer assets to black and white, this also meant I could restrict the desaturating javascript to running on just the content and leaving these pieces alone, taking a bit of a load off the client.

I actually had the easiest time getting it to work in IE... there's a filter. I wouldn't have used an evil evil filter if it hadn't just been for half of one day but it was so I did.

I think this kind of photo manipulation has a place in web design since it means we can keep the unaltered versions of files and change their rendering when we change the theme, that's pretty powerful.

**Authentic Content.**

We were lucky that the [BCIT Archives](http://www.bcit.ca/archives/) have begun digitizing much of their collection. We got a great deal of source material from the [1968-69 Program and Course Catalogue](http://archives.bcit.ca/PDFs/1968_1969BCIT_PTCalendar.pdf). We listed courses like Punch Card Systems and Fortran VI for the day - both sold out of course.

Nope, the logo wasn't a Star Trek knock off, that's what the future looked like in the 60s and both BCIT and Star Trek ran with it.

The content about campus events came from copies of the student news paper from the same era. My favourite of the new stories was about how BCIT was getting its _second_ computer.

**It was a lot of fun and I'm glad we work at the kind of place that was keen to let us do it.**
