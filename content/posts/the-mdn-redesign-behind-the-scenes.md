---
title: The MDN Redesign “Behind the Scenes”
id: 781
comment: false
categories:
  - webdesign
date: 2017-08-01 19:34:47
tags:
---

_This article was originally published on Mozilla's [Hacks Blog](https://hacks.mozilla.org/2017/07/the-mdn-redesign-behind-the-scenes/)._

[Kuma](https://github.com/mozilla/kuma), the code that produces the [MDN](https://developer.mozilla.org/en-US/) site, is a weird mix of the old and the new. [MDN turned ten](https://developer.mozilla.org/en-US/docs/MDN_at_ten) in 2015 and there’s still code and content around from those very first days. When I sat down to start coding the current redesign, the first thing I did was [remove the last few traces of the last redesign](https://github.com/mozilla/kuma/pull/4254). In contrast, we have a cutting-edge audience: 92% of our users have a browser with CSS grid support! [We enabled http2](https://mozilla.github.io/meao/2017/06/26/http2/), and 98% of our users have seen benefits from that.

One of the ways we deal with old code in kuma is with the campsite rule: _Always leave your campsite better than you found it_. A redesign touches a lot of files, and this was a great opportunity to clean up and refactor — at least until the deadline started getting close.

A redesign is also a great time to change stuff you’re afraid of breaking. People are more understanding of you working the bugs out of something new than breaking something that’s worked for years. I removed 640 lines of stale code during the redesign. (And if I broke a six-year-old XPCOM tutorial you use daily by removing the custom list-style-type, please [file a bug](https://bugzilla.mozilla.org/enter_bug.cgi?format=guided#h=dupes|Mozilla%20Developer%20Network|)!)

## One website with two looks

Rather than working on the CSS for the redesign in a separate “redesign” folder, we duplicated all the files and added “-old” to the file name of the old files, which means that all of our redesign work is happening in the “official” files. This preserves the git history and means we don’t have to move anything around after launch. Once we’re happy with the code, we can delete the “-old” files with confidence.

To serve the new styles to our beta testers and the “-old” ones to everyone else, we use [Django Waffle](https://github.com/jsocol/django-waffle). Waffle can also be used to serve different content but because there’s a strong separation of presentation and content on MDN, we’ve made very few changes to the HTML.

## Bugs our beta testers found

MDN is _huge_, and we can’t test every page in every locale. We’re really lucky to have active beta testers. :) Some of the biggest things they turned up for us were:

### Highlighting

![Problems with Zilla Highlight in Vietnamese and when there&#039;s inline code examples.](http://stephaniehobson.ca/wordpress/wp-content/uploads/2017/10/vi.png)

We started out by replicating Mozilla’s brand “highlight” effect by using the Zilla Slab Highlight font, but we abandoned that pretty quickly when problems turned up in many [of](https://bugzilla.mozilla.org/show_bug.cgi?id=1375831) [our](https://bugzilla.mozilla.org/show_bug.cgi?id=1375917) [locales](https://bugzilla.mozilla.org/show_bug.cgi?id=1375879) and when used in combination with inline code.

The current approach puts a full-width black background on h3 and h4 headings by default, and then some JavaScript runs to add a `&lt;span&gt;` tag so that the black background hugs the heading text. Progressive enhancement at work.

We went back and forth about this for a while, wondering if the JavaScript and extra `&lt;span&gt;` was worth the effort. But we stuck with it because it makes the h3 and h4 headings much easier to spot when scanning the page.

### What’s Taiwanese for Slab Serif?

![Showing the difference between Zilla&#039;s thick strokes and the thin strokes of Taiwanese.](http://stephaniehobson.ca/wordpress/wp-content/uploads/2017/10/taiwanese.png)

Previously we used Open Sans as our heading text. With the redesign, we switched to Zilla Slab. Open Sans was thin and an average height for a font. It didn’t look out of place next to the system fallbacks for Chinese or Japanese characters.

Zilla is big and thick, and we started getting feedback about the contrast with these system fallbacks. Additionally, the character set for Zilla is European Latin only at the moment, so Vietnamese, which uses Latin characters plus a couple Latin characters not used in Europe, displayed [font fallbacks in the middles of words](https://bugzilla.mozilla.org/show_bug.cgi?id=1379259).

To address both these problems, we implemented a system that allowed us to [override the site fonts on a per-locale basis](https://bugzilla.mozilla.org/show_bug.cgi?id=1379259).

### Contrast

We received many complaints about the old design’s low-contrast display. We went a bit too far the other way with this design and received complaints about the high contrast. We’ve toned it down to the ever-popular `#333` now.

## What’s next

We’re moving on from this to make specific improvements to the article pages:

*   Putting code samples high on the page; our hard-working writers and volunteers are doing this, one page at a time.
*   A better approach to readable line-lengths and wide code examples, inspired by the Hacks Blog theme.
*   Compatibility tables that display desktop and mobile data side by side.
*   Code samples you can experiment with in the page.

## Who is “we”?

The MDN dev team is:

*   **Stephanie Hobson**, me, CSS-Pre-Pre-Processor
*   **Schalk Neethling**, who reviewed each of my 30+ pull requests in ALL THE BROWSERS, sometimes multiple times
*   **John Whitlock**, who did the awesome [locale fallbacks](https://github.com/mozilla/kuma/pull/4303#issue-241394205)
*   **Ryan Johnson**, who always asks “Why not?” when John and I say things can’t be done.

We blog sporadically on the [Mozilla Marketing Engineering &amp; Operations blog](https://mozilla.github.io/meao/2017/07/06/kuma-report/).

You should also read this blog post by our Product Manager, Kadir Topal, about [The Future of MDN](https://blog.mozilla.org/opendesign/future-mdn-focus-web-docs/).