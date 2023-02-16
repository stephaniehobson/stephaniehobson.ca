---
title: Dictation is turned off by screen time
date: 2023-01-06 22:17:00
year: 2023
tags:
    - accessibility
    - webdesign
---

I recently ran into a problem where I could not enable dictation on my MacOS laptop. In the system settings
the toggle was grayed out and could not be flipped. The message beneath it was "Dictation is turned off
by Screen Time."

{{< figure src="dictation.png" alt="Screen shot of the error appearing in the systems settings.">}}

I'm not bad at computers but I could not figure out where to re-enable it. It was not under *App Limits*.
It was not under *Content & Privacy*. I could not add it to *Always Allowed*. Searching the system settings
for "dictation" turned up two options, neither of which did what I needed.

Out of desperation I posted about it on Twitter and Mastodon. Of course I found it 5 second later.

On MacOS Ventura it's *System Settings* > *Screen Time* > *Content & Privacy* > *App Restrictions* >
*Allow Siri & Dictation*.

{{< figure src="allow-dictation.png" alt="Screen shot of App Restrictions settings.">}}

Happy dictating.
