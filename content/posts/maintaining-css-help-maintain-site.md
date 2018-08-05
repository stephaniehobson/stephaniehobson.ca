---
title: Maintaining your CSS helps maintain your site
tags:
  - bcit
id: 112
categories:
  - webdesign
date: 2009-12-10 12:02:44
---

Rather than doing one giant redesign and launch, at BCIT, we've been doing small updates for a while now.

Take our footer for example, I got to update all of them using the CSS a few times and then we decided we wanted to mix up the HTML. Templates and applications were updated with the new code in phases. There were a few different ways the CSS for this could have been managed but I chose to have the old code co-exist with the new in the same style sheet and differentiated the two with IDs (let's say I called them #footer and #fatfooter).

We've phased in #fatfooter slowly across the 46ish templates, 3 CMSs, and only Brandon knows how many applications with their own code that make up our website.

We should be done now and, unintentionally, I made it easy for us to check. A quick search of the server for id="footer" turned up all the stragglers.

Some of the stragglers had been neglected for a while and turned out to need more than just a new footer...

So what's languishing in your code that you can delete?
