---
title: Insecurity
aliases:
  - /wordpress/2007/03/08/insecurity/
date: 2007-03-08 21:21:29
year: "2007"
id: 6
tags:
  - webdesign
---

All I did was copy the cgi file and change the file name and now it's not encrypting the e-mails it sends any more.

Hm.

**Edit:** Yup, the problem was that I changed the name.

**Edit 07-03-26:** I've also discovered that cgi files are not encoded using windows text format so opening them in notepad and saving them again is enough to destroy all functionality.
