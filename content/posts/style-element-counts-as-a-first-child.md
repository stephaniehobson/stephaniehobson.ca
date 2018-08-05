---
title: 'A style tag counts as a :first-child'
tags:
  - code
  - css
  - fix
  - html
  - html5
  - webdesign
id: 365
comment: false
categories:
  - webdesign
date: 2011-08-24 23:31:09
---

**EDIT 2011-09-15: All of this applies to `<script>` in the body as well.**

I have some bad news and a fix (I hesitate to call it good news).

HTML5 introduces a way for us to include `<style>` elements on the page, we just need to give them an attribute of `scoped`. So, for example, if you have an SSI included widget you can include the styles in the widget file instead of trying to devise a way to add them to the head.

**A Problem**

But it causes an itsy bitsy problem with the styles. The `<style>` counts as an element, and if you put it first, it becomes the first-child. The styles I'd defined for the first-child in that block were not applied to the (now) second child.

In other words this:

```
div p:first-child
```

stopped working when I added the style to the HTML here:

```
<div>
<style> p { color:#00F;}</style>
<p>Text!</p>

</div>
```

**A Fix**

Fortunately we can include <samp>style</samp> in our CSS declarations (and even style it if you want, [I gave it a width, and garish background colour](/wtf/scope_style_first-child.html) in both FF3.6 and Chrome) so an adjacent sibling selector is the fix:

```
div style:first-child + p
```

I'm not keen on going through my styles sheets and adding this rule to every place I have first-child declarations but we don't use scoped style elements too much so hopefully I won't have to.

The other option would be to not put the `<style>` first in the parent I pretty clearly remember reading that the style has to be the first-child, of course, I can't find where I read it.

**Side Note: using <samp>&lt;style scoped&gt;</samp> today.**

As of August 2011 there are no browsers that support the `<style>` attribute but if you're using an HTML5 doctype you can still use `<style scoped>` today. Browsers have been happily rendering style elements inside the body for quite some time, it just wasn't valid HTML before ;)

The old browsers will apply the styles in your scoped tag to the entire page so I combine it with a class to get the effect I intended.

```
<div class="foo">"

<style scoped> .foo p { color:#00F; } </style>

<p>Text!</p>

</div>
```
