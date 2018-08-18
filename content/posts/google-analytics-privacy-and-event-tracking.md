---
title: 'Google Analytics, Privacy, and Event Tracking'
aliases:
  - /wordpress/2016/07/28/google-analytics-privacy-and-event-tracking/
date: 2016-07-28 09:38:57
year: "2016"
id: 752
canonical: https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/
tags:
  - analytics
  - mozilla
  - webdesign
---

_This article was [originally published on the Mozilla Hacks blog](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/)._

Many of us use Google Analytics (GA) or similar third-party services to keep track of how people interact with our websites; telling us things like when people visit and what they click. This data can help us make important decisions, such as when to schedule maintenance or if a feature can be removed.

Because these services are installed on multiple websites these third-parties can collect a lot of information about people as they move around the internet. Not everyone is comfortable with that. Some people have started taking steps to protect their privacy by installing ad blockers like Ghostery or enabling [tracking protection in Firefox](https://blog.mozilla.org/blog/2015/11/03/firefox-now-offers-a-more-private-browsing-experience/).

I think this is great!

## Sometimes this breaks things

When code depends on these third-party services and they're not there stuff goes wrong.

I'm going to use tracking external links as my example because it's a common use case, but I started investigating this problem because we accidentally broke the ability to navigate <abbr title="For certain edge cases, it's not as bad as it sounds.">within</abbr> our [website](https://developer.mozilla.org/) for users who were choosing not to load the GA script.

I'm also going to use the universal analytics tracking code (analytics.js) for my examples here, not the classic analytics code (ga.js), so if you notice some differences between my code and yours that might be why.

## What goes wrong?

The current method (Jan 2016) for [tracking outbound links](https://support.google.com/analytics/answer/1136920?hl=en) as recommended by Google looks like this:

```
&lt;a href=&quot;http://www.example.com&quot;
    onclick=&quot;trackOutboundLink('http://www.example.com'); return false;&quot;&gt;
        Check out example.com
&lt;/a&gt;`</pre>

<pre>`var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {
        'transport': 'beacon',
        'hitCallback': function(){document.location = url;}
    });
}
```

What Google is recommending here is:

1. add `return false` to your links so that clicking on them doesn't take the user off the page
2. when a user clicks a link, add that click to the GA queue of events to track and tell GA to take the user to the new page after that is done
3. GA processes the event
4. GA triggers the callback, taking the user to the new page

This guarantees that the user doesn't leave the site before their action is recorded. However, if GA fails to process the event... it never triggers the callback, breaking all links off the website. :(

We are relying on GA to send the user to the new page, but what if the GA code never executes?

## How we can avoid problems

If you're using the current recommended method of adding GA to your site you're including something like this on all your pages:

```
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-xxxxx-x', 'auto');
ga('send', 'pageview');
```

This snippet creates a global `ga` object. The `ga` object is available in JavaScript whether the rest of the script successfully loads from Google or not.

This means two things:

1.  It is possible to add events to the queue before GA has loaded. (Cool! This is handy for tracking events that happen really quickly.)
2.  We can't check if GA has loaded by checking for the existence of the `ga` object [like we used to](http://ejohn.org/blog/fixing-google-analytics-for-ghostery/) because it's always there.

So how do we know if GA has loaded? Well, clever people have figured out that when it initializes, GA alters the global `ga` object in a few different ways. None of these changes are officially documented by Google which means any of them could break in the long term.

In [Tracking outbound links with Google Analytics](http://veithen.github.io/2015/01/24/outbound-link-tracking.html), Andreas Veithen (who works at Google but was writing on his personal blog) suggests that the most reliable check is to see if the `ga` object still has the `q` array. The array is removed after GA initializes and processes all the events waiting in the `ga.q` queue. Because `ga.q` is created by the snippet we paste on our sites, changing it would require us to make changes to our websites and so would be a major change for Google to undertake. On the other hand, it would also be possible for Google to change their code to not remove `ga.q` so I'm not sure this is more reliable than any other method.

In [Google Analytics, Ghostery, and Event Tracking](http://supergeekery.com/geekblog/comments/google-analytics-ghostery-and-event-tracking) John Morton suggests checking for the `create` property on the `ga` object. This technique has been around the longest and is probably the most widely used (I say this after a quick informal glance at GitHub).

In [Workaround for when the hitCallback function does not receive a response (analytics.js)](https://www.domsammut.com/code/workaround-for-when-the-hitcallback-function-does-not-receive-a-response-analytics-js), Dom Sammut observes that we can check for the `loaded` property on the `ga` object. This is a method used informally in [some Google documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-click) so it's probably also somewhat reliable. I like this one because it is obvious what we're checking for.

Opting for the last method, we alter Google's suggested code like so:
```
var trackOutboundLink = function(url) {
    // check if the GA object exists and that it has initialized
    if(window.ga && ga.loaded) { {
        // if yes, rely on GA to follow link
        ga('send', 'event', 'outbound', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function(){document.location = url;}
        });
    } else {
        // if not, follow link ourselves
        document.location = url;
    }
}
```

**Making this kind of check before relying on _any_ third-party script is good practice.** You should also be [including a local fallback for any script that is not coming from your own domain](http://eddmann.com/posts/providing-local-js-and-css-resources-for-cdn-fallbacks/) - including CDNs.

## Respecting our users' privacy

[Most users care about their privacy](http://www.pewinternet.org/2015/05/20/americans-views-about-data-collection-and-security/) and there are more steps we can take to protect it. Depending on where you work you may also be required by your country's laws or your company’s privacy policy to take extra care with users’ data.

### Configuring Google Analytics for privacy

If Google Analytics is your analytics platform of choice, there are [a number of steps you can take to make it more private](http://gu.illau.me/posts/privacy-and-google-analytics/).

One of these is an easy configuration option to request anonymized user IP addresses. Essentially, [Google Analytics changes the last octet of the user’s IP address to 0 before recording it](https://support.google.com/analytics/answer/2763052?hl=en).

This is triggered by adding an additional line to your tracking snippet after `  ga('send', 'pageview');`.

```js
ga('set', 'anonymizeIp', true);
```

Of course, Google still gets the users' IP address (that's the way the web works), we're just trusting them not to store it.

### Respecting Do Not Track (DNT)

It's also possible to detect when a user has enabled Do Not Track and be pro-active about what scripts you choose to load.

Schalk Neethling documents the process in [Respect User Choice ~ Do Not Track](http://schalkneethling.github.io/blog/2015/11/06/respect-user-choice-do-not-track/). In a nutshell, we wrap the GA call with a check to see if the user has enabled DNT before executing the call to include the file.

```js
function _dntEnabled() {
    // include the helper function from https://github.com/schalkneethling/dnt-helper/blob/master/js/dnt-helper.js

}
// Check the value of DNT before including GA
if (!_dntEnabled()) {
    // include the Google Analytics snippet
}
```

This means that the `ga` object will not be added to the global scope for our page, but that's okay, the code snippet above handles that case gracefully as well.

Do you have other techniques/suggestions for using analytics services while respecting the online privacy of visitors to your site? Feel free to share your experience.
