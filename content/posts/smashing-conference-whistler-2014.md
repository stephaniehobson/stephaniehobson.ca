---
title: Smashing Conference Whistler 2014
aliases:
  - /wordpress/2015/01/06/conference-debrief-smashing-conference-whistler-2014/ ‎
date: 2015-01-06 22:32:27
year: "2015"
id: 251
tags:
  - conference
  - links
  - video
---
A few weeks ago [Smashing Conference came to Whistler](http://smashingconf.com/whistler-2014/). This caliber of conference comes to Canada infrequently so I couldn't not go ;)

## The conference

As good as I hoped it would be. A mix of strategy and near future technology examples.

### My Favourite Talk

* Building the next-generation of [theguardian.com](https://theguardian.com), by Patrick Hamann
* [Slides](https://speakerdeck.com/patrickhamann/building-theguardian-dot-com)
* The Guardian takes a true mobile-first, progressive-enhancement approach to serving their content. I was super excited to see how quickly and cleanly an article loads. I think this is the future of front-end performance and I am eager to implement much of what I learned here.

### Talk Summaries

**Marcin Wichary**<br>
_Good is the enemy of great: On designing, and then undesigning, a perfect link underline_<br>
200 years of typographic history was lost when we moved from printing presses to the typewriter, Marcin Took us through some of what he did in his attempt to re-create the perfect underline.His ultimate point was that it's important to find a balance between shipping and creating good code. Perfectionism is not the right balance but we should strive to make things good and not just improve the status quo.

**Susan Robertson**<br>
_Style Guides: Why bother?_<br>
Susan walked us through a long list of benefits to using a style guide. Highlights included: front-end speed, consistency, and performance. Lots of good resources here: [styleguides.io](http://styleguides.io)

**Yoav Weiss**<br>
_Responsive Images are Coming to a Browser Near You_<br>
I have been hearing a lot about new picture element and srcset attributes but Yoav was the first to really get me excited about them. The potential image management problems these additions could create are huge but there is a lot of potential to be really neat things with them. `<picture>`is a solution for providing art direction of images on different screen sizes and `srcset` gets added to  if you just want to provide a smaller/larger version of an identical image.

**Marcy Sutton**<br>
_A Web for Everybody_<br>
Accessibility is easier if you build it you build it in from the start. Ask, does it work: With the keyboard only? In a screen reader? Without sound? Without colour? In high contrast mode? "This stuff is not that hard."

**Jenn Lukas**<br>
_The Developer’s Ampersandwich_<br>
Things to consider when implementing type on a website: if you haven't been given design direction you can find the type by looking at what's popular and already in use, separate presentation from content, be aware of performance issues with web fonts, add accessible fallbacks for a icon fonts, use tools like typecast to communicate with designers about general styles rather than content specific styles.

**Zach Leatherman**<br>
_Better @font-face with Font Load Events_<br>
Web fonts are rendered blocking. Zach proposes a JavaScript fix which prioritizes a FOIT for icon fonts and a FOUT for content fonts. Lots of good stuff from [this excellent article of his](http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html).

**Stephen Hay**<br>
_Easing the Pain of Designing in the Browser_<br>
We need to stop thinking about layout first, we need to start thinking about structured content first. Begin by focusing on the small screen, and then focus on type and color.

**John Allsopp**<br>
_The Web's future is offline_<br>
"We can't keep building apps with the desktop mindset of permanent, fast connectivity, where a temporary disconnection or slow service is regarded as a problem and communicated as an error."

**Dave Shea**<br>
_Rolling Your Own CSS Methodology_<br>
A CSS framework is not about syntax. It's about discipline and optimizing for people. Ideals Mobify uses when building theirs: classes for everything, no IDs, no nesting, no !important.

* * *

That was one day. It was a really long day.

* * *

**Johnathan Snook** <br>
Jonathan gave a very personal talk about the development of his career overtime and the importance of empathy. It touched a lot of people, but it is difficult to summarize in two sentences.

**Brad Frost**<br>
_Atomic Design_<br>
If we all use the same framework we all look alike. We should be building "Tiny Bootstraps, for every client." - Dave Rupert. Brad demoed [patternlab.io](http://patternlab.io) which is a really cool tool for breaking designs down into component parts.

**Lyza D. Gardner**<br>
_Soothing Web Weariness: Saving the Web by Doing as Little as Possible_<br>
Make projects smaller to begin with - increase your constraints - improve them iteratively and systematically instead of accepting complexity as the status quo.

**Val Head**<br>
_All the Right Moves: Putting your UIs in Motion_<br>
Animations needs to be designed with intent the same way you would design any other part of the site. Prototype animations. Test that they match your site's style and feel fast.

**Kyle Simpson**<br>
_#CSS {Yawn: Yay!}_<br>
Kyle talked about some high-level concepts he'd like to see implemented in CSS templating. It was very much a talk about the next generation of CSS informed by some complex computing science principles. I can't do it justice, [his slides are here](https://speakerdeck.com/getify/number-css-yawn-yay)

**Tim Kadlec**<br>
_In Between_<br>
Like Val, Tim talked about designing animations with intent. He had lots of great examples and data.

**Paul Irish**<br>
_Getting to Fast_<br>
Not all pixels are created equal. Paul talked about why the first 14KB transferred are the most important to performance.

* * *

It was a great conference. I left feeling super excited about my job, which is how I always want to leave conferences :) I also gave a 'jam session' talk on accessibility. They hosted it in a pub and I highly recommend pub audiences, they laugh at all your jokes! Accessibility was a theme running through all of the talks at Smashing and I am glad to see it being spoken about and incorporated into examples again I feel that, as an industry, we've sort of forgotten about it for a few years.
