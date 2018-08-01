---
title: HTTP/2 on MDN
id: 764
comment: false
categories:
  - webdesign
date: 2017-07-10 12:46:34
tags:
---

_This article was originally published on the [Mozilla Marketing Engineering & Operations blog](https://mozilla.github.io/meao/2017/06/26/http2/)._

We enabled HTTP/2 on MDN's CDN.

We didn't do anything to optimize for HTTP/2, we just enabled it.

We're seeing performance improvements.

## You don't have to get ready before you start using HTTP/2

While doing research to see if turning it on without doing any optimizations was a good idea I read things like:

> "It also means that all of those HTTP1 performance techniques are harmful.  They will make a HTTP2 website slower, not faster - don't use them." - [HTTP2 for front-end web developers](https://mattwilcox.net/web-development/http2-for-front-end-web-developers)

And:

> "However, many of the things you think of as being best practices can be detrimental to performance under HTTP/2." - [Getting Ready For HTTP2: A Guide For Web Designers And Developers](https://www.smashingmagazine.com/2016/02/getting-ready-for-http2/)

Which suggest that enabling HTTP/2 on a site optimized for HTTP/1.1 could result in a slower site.

A better way to interpret those quotes is:

> If you optimize for HTTP/1.1 and turn on HTTP/2 your site will not be as fast as it could be - but it might still be faster!

On MDN we concatenate a lot of our files but we don't concatenate all of them. For example, our article pages have 9 different files coming from our CDN. I thought we could benefit from a bit of HTTP/2's multiplexing and header compression. And we did. You can see the DNS lookup time drop off in this waterfall from [Pingdom](https://tools.pingdom.com/):

![Waterfall showing over 0.3s of DNS look up for each request.](http://stephaniehobson.ca/wordpress/wp-content/uploads/2017/07/waterfall_before.png)

![Waterfall showing DNS lookup for only first asset requested.](http://stephaniehobson.ca/wordpress/wp-content/uploads/2017/07/waterfall_after.png)

## Some numbers

Overall, our tests don't show a huge improvement in page load speed but there are small improvements for everyone, and a real improvement for users located far away from our servers. (Hi Australia and China!)

| Service | Location | Browser | HTTP/1.1 | HTTP/2 | Change |
|---|---|---|---:|---:|---|
| [Pingdom](https://tools.pingdom.com/) | Dallas | Chrome | 1.54s | 1.34s | 0.2s |
| [Pingdom](https://tools.pingdom.com/) | Melbourne | Chrome | 2.94s | 2.80s | 0.14s |
| [WebPageTest](http://www.webpagetest.org/) | London | IE11 | 2.39s | 2.37s | 0.02s |
| [WebPageTest](http://www.webpagetest.org/) | Australia | Firefox | 5.61s | 5.17s| 0.44s |
| Google Analytics | All | Chrome | 3.74s | 3.04s | 0.7s |
| Google Analytics | All | Firefox | 3.99s | 3.71s | 0.28s |
| Google Analytics | Australia | All | 3.01s | 1.69s | 1.32s |
| Google Analytics | China | All | 8.10s | 6.69s | 1.41s |

I tried to segment our users in Google Analytics to make sure we did not have a negative impact on users relying on HTTP/1.1 and... I couldn't find enough users to draw any conclusions. MDN is lucky like that. (It's possible the IE11 test in the table above is on Windows 7 and does not support HTTP/2, but WebPageTest doesn't identify the OS.) In theory, older browsers should not be affected because the protocol falls back to HTTP/1.1.

There was a lot of variation in the page speed data I examined. I recommend running your before and after benchmark tests multiple times on multiple days so you can take an average. Try to wait a week before drawing conclusions from your analytics data as well.

In a perfect world you don't increase the amount of code on your site or invalidate anyone's caches in the sample time period, but we don't develop in a perfect world.

## Read more on HTTP/2

- [HTTP2 for front-end web developers](https://mattwilcox.net/web-development/http2-for-front-end-web-developers)
- [Getting Ready For HTTP2: A Guide For Web Designers And Developers](https://www.smashingmagazine.com/2016/02/getting-ready-for-http2/)
- [HTTP/2 For Web Developers](https://blog.cloudflare.com/http-2-for-web-developers/)

## Next

**Get our pages into data centres around the world.**

This involves changing our hosting services, not a small task, and changing our pages to serve the same content to all logged out users.

**Decrease asset size by removing support for older browsers.**

If you think working on MDN was a great job because we have very modern browser support requirements, remember we're also working on a [10 year old code base](https://developer.mozilla.org/en-US/docs/MDN_at_ten/History_of_MDN).

Thanks for using MDN!
