---
title: How we rebuilt the viewsourceconf.org website
aliases:
  - /wordpress/2017/10/31/how-we-rebuilt-the-viewsourceconf-org-website/
date: 2017-10-31 21:19:14
year: "2017"
id: 792
tags:
  - mozilla
  - webdesign
---

_This article was originally published on Mozilla’s [Hacks Blog](https://hacks.mozilla.org/2017/10/how-we-rebuilt-the-viewsourceconf-org-website/)._

As a front-end developer at Mozilla, I end up working on big sites that have been around for a long time. There are a lot of interesting challenges when working with legacy code at a large scale, but rebuilding from scratch usually isn’t an option.

The [View Source Conference](http://viewsourceconf.org/) website, on the other hand, is a small site. So when we decided to move away from WordPress, we had the chance to start fresh.

Here are a few highlights of the architectural decisions we made to make the site faster, more secure, and more reliable.

## A Static Site

When a user requests a page from a CMS (content management system) like Wordpress the server puts it together from databases and templates. This takes the server a small amount of time. When a site is built on request like this we call it a "dynamic" website.

When a user requests a page from a static site the server only has to find and serve one file. It’s faster and takes fewer resources. We used a [static site generator](https://www.sitepoint.com/7-reasons-use-static-site-generator/) to generate our files before transferring them to the server.

Static files are also easier to copy than dynamic sites, this means we can copy our static site to different CDNs (content delivery networks) around the world. Getting our content closer to our users is a very effective way to reduce [latency](https://www.igvita.com/2012/07/19/latency-the-new-web-performance-bottleneck/) which is one of the biggest hurdles to delivering a site fast.

## Offline First

A [service worker](https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers) is JavaScript that runs in a browser but not as part of a page. The most common use for service workers is to watch network requests and respond instead of the server.

I wanted to be sure the conference attendees would have access to the event schedule, even if they didn’t have wifi. So, when a user arrives on the site, browsers that support service workers automatically cache the conference schedule.

If the user returns to the site without a network connection the service worker will reply to the request with the cached schedule.

I am very grateful for the documentation published by [The Guardian](https://www.theguardian.com/info/developer-blog/2015/nov/04/building-an-offline-page-for-theguardiancom), [Jeremy Keith](https://www.theguardian.com/info/developer-blog/2015/nov/04/building-an-offline-page-for-theguardiancom), and  others who are already using Service Workers.

## Mobile First

When responsive web design first became the norm, the industry standard was to serve the full desktop site to all browsers with a bunch of extra code telling mobile browsers which pieces to remove to make the simplified mobile version. With the spread of mobile came the  [Mobile First](https://www.lukew.com/ff/entry.asp?1137) development approach. Mobile first delivers the content and code for the mobile version of a site first and then the larger more powerful desktop computers do the work of creating a better large screen experience.

The View Source Conf site starts as a minimal mobile-friendly version. Then [media queries in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) and [media queries in JavaScript](https://hacks.mozilla.org/2012/06/using-window-matchmedia-to-do-media-queries-in-javascript/) add more complicated layout instructions for larger screens.

## SVG

I used inline [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)s for the logo and icons. They look crisper on retina screens and, because they’re inline, don’t require any extra assets to download. Inlining also meant that I could [change the logo’s colour](https://css-tricks.com/cascading-svg-fill-color/) in our print styles. It was my first time [creating accessible SVGs](https://www.sitepoint.com/tips-accessible-svg/).

## No Script

All the content and functionality on the View Source site works with JavaScript disabled. Instead of sending shims and polyfills to older browsers to make them handle newer JavaScript features, we support those browsers by telling them not to load the JavaScript at all.

This meant we could write modern JavaScript! It also simplified testing. Less capable browsers just get functional, readable content, with no chance for odd JavaScript errors.

This isn’t a new idea, it’s [progressive enhancement](https://alistapart.com/article/understandingprogressiveenhancement) combined with the [BBC News’ “Cut the Mustard” test](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard).

## HTTPS

[HTTPS protects the privacy and security of your users](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) and with [Let’s Encrypt](https://letsencrypt.org/) it’s free. You can tell browsers to only load your site over HTTPS with the [`Strict-Transport-Security` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security).

## Do Not Track

We use Google Analytics to measure site traffic and try to improve our conversion rates but we respect the privacy of users visiting with [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) enabled. By [detecting Do Not Track settings](http://schalkneethling.github.io/blog/2015/11/06/respect-user-choice-do-not-track/) we can avoid serving them the Google Analytics file. If a user has not set Do Not Track but has an ad blocker installed all our code runs without requiring Google Analytics to initialize.

## View Source

Hear industry leaders speak about topics like web performance, security, reliability, CSS grids and more at the [View Source Conference in London](https://viewsourceconf.org/london-2017/) October 27, 2017\. See the [full schedule](https://viewsourceconf.org/london-2017/#schedule)! Or [watch videos of last year's talks](https://viewsourceconf.org/berlin-2016/).
