---
title: 'Conference Debrief: An Event Apart Austin 2015'
aliases:
  - /wordpress/2015/10/15/accessibility
date: 2015-10-15 10:31:02
year: "2015"
id: 675
tags:
  - conference
  - links
  - webdesign
---

Last week, because working at Mozilla is awesome, I got to attend [An Event Apart Austin](http://aneventapart.com/event/austin-2015), the conference put on by the [A List Apart](http://alistapart.com/) organization. It's consistently one of the highest quality conferences for front-end/user experience talks. I try to go every other year.

The conference was great and the organizers did a good job making the speakers accessible, sitting them with us at lunch and keeping them around for the mixer. The caliber of the attendees is also consistently high. I have great conversations no matter who I sit with at lunch.

Most of these speakers are pros who have done their talks in multiple places so its usually possible to find videos of them online with a bit of Googling, and they might be speaking at a conference near you!

## Conference overview

Designing for performance and designing with empathy were common themes this year and we got good overviews of some exciting CSS and HTML features that will be widely supported in the near future.

## My Favourite Talk

A CSS geek at heart I enjoyed Jen Simmons' "Modern Layouts: Getting Out of Our Ruts" the most. “We're about to see a renaissance in design on the web," she promised at one point and I, for one, will be excited to see more than rectangles on the web. She covered CSS Shapes, Regions, Grid Layout, and the new view-port units, illustrating wonderfully with some really unique examples of layout from *gasp* print which she advocated we translate (not transfer) to the web. [A similar version of this talk online if I've piqued your interest.](https://www.youtube.com/watch?v=ZNpn7FBp_9U)

## Talk Summaries

**Jeffrey Zeldman**
_The Fault, Dear Brutus (or: Career Advice From a Cranky Old Man)_
Zeldman made a compelling argument for quitting your job regularly :P He had some anecdotes about how it is the easiest path to career advancement, and this resonated with my own experience. He said the same could be accomplished by switching teams within an organization and I am glad we have so much sideways movement at Mozilla.

**Yesenia Perez-Cruz**
_Design Decisions Through the Lens of Performance_
Yesenia made a clear case for designers needing to take a lot of responsibility for the performance of a website. Designers make decisions about some of the things that add the most weight to our pages: fonts, images, and functionality - before developers ever see them. She said performance budgets should be set and understood as part of the requirements process and designers can be educated to stay within them and enlisted to help communicate with clients about staying within them as well. Great talk +1 would watch again.

**Cameron Moll**
_Unified UX_
Cameron talked about how a brand's presence covers more screens than just a desktop and said we should be unifying user experience across browsers, devices, apps, and accounts citing the fact that 40% of all online US users start an activity on one screen and finish on another. He said we should pay attention to form and function (making widgets look and work similarly, respecting our users mental models) and data symmetry (syncing shopping carts, reading places, etc).

**Karen McGrane**
_Content in a Zombie Apocalypse_
Like Cameron spoke about the need for a unified UX, Karen spoke about the need for unified content - as much for the organization's benefit as the users'. She encouraged us to find ways to create and update content in one place to share across all platforms. She despaired about how poor a tool a WYSIWYG editor is at translating styling decisions into semantic information (It's not a list of links floated to the right with a narrow max width - it's a table of contents!) and hoped for a future with better tools for storing and updating structured text so content doesn't have to be redesigned every time a site is.

**Ethan Marcotte**
_Laziness in the Time of Responsive Design_
Ethan, who invented the term responsive web design, encouraged us to avoid the f-word for our sites - frameworks - and encouraged us to solve problems in context, watching to see where content needs adjustments rather than blanket redesigning the experience at different sizes. And he didn't miss the opportunity to tell us hamburger menus are still awful.

**Lara Hogan**
_Designing for Performance_
Where Yesenia talked about process improvements for better performance Lara talked about code improvements. She talked in-depth about image compression, font sub-setting (explaining how the infamous 4 and a horse stars review bug occurred), style guides and OOCSS, and ended talking about setting a public performance budget and how to make performance everyone's concern rather than having performance cops.

**Eric Meyer**
_Designing for Crisis_
Based on his personal experience sitting in a stranger's car barreling down a highway, racing the med-evac helicopter carrying his young daughter to a hospital in an unfamiliar city, Eric implored us to add a new persona to our design toolbox: a user in crisis. We like to think we're designing for cheerful, calm, with-it users living in the home of the future but we don't get to decide when, where, or how a user will access our sites. He gave examples of how this persona could help the banking, hospital, airline, and insurance industries. And he gave some creative solutions to help us do user testing for these scenarios including using CSS to blur the page, JavaScript to transpose letters in words, or playing the Jeopardy theme song to testers. He encouraged us not to treat these users as edge cases, because defining edge cases defines the limits of what we care about, and we should care about these users. I don't see much potential for an MDN user to be in crisis but it's easy to imagine a Firefox user who just lost all their data or thinks an account of theirs has been hacked could be panicking and not thinking clearly.

**Brad Frost**
_Atomic Design_
Pioneer of style guides and pattern libraries, Brad reminded us what these look like and why they are valuable and demoed his open source tool [patternlab.io](http://patternlab.io/) for helping to create and maintain them. [He has a great system, you can read about it here.](http://bradfrost.com/blog/post/atomic-web-design/)

**Matt Haughey**
_Empathy Is Good Business: How Front-Line Customer Support Can Make You A Better Designer_
Continuing the empathic design theme Matt encouraged us all to spend a couple hours a week doing front-line customer support and explained how Slack is set up so that all employees must do that. It gives everyone a better idea of how users are using the product and what their pain points are. Rather than having personas to refer to designers have real people they could reference. They also don't talk down to their users or judge the feedback they give them. It's all data that makes the product better.

**Jeremy Keith**
_Resilience: Building a Robust Web That Lasts_
Jeremy praised the flexibility of HTML and CSS and encouraged us to embrace their resilience rather than fighting the inherent variability of the systems. He reminded us that we can build systems that work for everyone with very basic functionality and then layer enhancements on top of it. At it's heart Instagram should be a bunch of `<img>`s and a `<input type="file">` and there's no reason to require JavaScript to see your friend's images or add your own. Layout, fonts, file previews, filters, are all enhancements. "If you build pages with the idea that parts other than HTML are optional, you will create a better and stronger web page." - [gov.uk](https://www.gov.uk/service-manual/making-software/progressive-enhancement.html)
