---
title: FireFox's buttons are wider than IE or Chrome/Safari's
aliases:
  - /wordpress/2011/03/09/firefoxs-buttons-wider-than-ie-or-chrome-safari/
date: 2011-03-09 14:29:42
year: "2011"
id: 296
tags:
  - code
  - webdesign
---

I hate form styling on the best of days. This is a good example of why:

Firefox's buttons are wider than IE's or Webkit's. Why? This little gem in the browser's style sheets:

```css
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
    padding: 0px 2px 0px 2px;
}
```

That's right, it's 4px wider. Thank you FireFox.

Fortunately, we can fix it!

```css
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
    padding: 0px;
}
```

That was easy :)

We have a class on our site that is applied to every button. I call it "formbutton" (I didn't get to pick it. My boss picked it 8 years ago. It's a great name isn't it? Epic and enduring.) So I can simplify that code up to this:

```css
.formbutton::-moz-focus-inner {
    padding: 0px;
}
```

**Want a little more info:**

I found this with a little help from this article on [viewing FireFox's default style sheets](http://www.oppenheim.com.au/2008/07/06/how-to-view-firefoxs-default-internal-css-stylesheet/). The observant among you may notice there is another style in there. It is for keyboard navigation. Use your new found powers wisely, don't remove it without replacing it.

Also, here's a link if you're wondering what is up with the [double colon notation.](http://www.evotech.net/blog/2007/05/after-v-after-what-is-double-colon-notation/)

And so far it does not look like there are equivalent pseudo elements in Webkit or IE, but I will admit to not looking very hard since this fixed my problem ;)
