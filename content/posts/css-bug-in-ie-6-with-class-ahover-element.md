---
title: 'CSS bug in IE 6 with: .class a:hover element'
aliases:
  - /wordpress/2007/12/19/css-bug-in-ie-6-with-class-ahover-element/
date: 2007-12-19 14:49:05
year: "2007"
id: 41
categories:
  - code
  - webdesign
---

This bug seems to apply to styling elements under a class or id within a link on hover.  Stuff like `.class a:hover span{}` or `#id a:hover strong{}`.  The solution is to define a property on the parent link `.class a:hover{}` that hasn't been declared anywhere else in your CSS, like a text indent of 0 or something.

All the work for the solution was done by [Tanfa, who wrote an article on IE Pure CSS Pop Ups Bug](http://www.tanfa.co.uk/css/articles/pure-css-popups-bug.asp), I just thought it was worth mentioning that this bug can be generalized to more than the CSS menus.

Here's what happened to me:

I had some text inside a link, and I wanted some of it to do one thing when rolled over and some of it to do something else.  I marked it up like this:

```html
<div class="promo">
    <h3>News</h3>
    <a href="link.html">IE has lots of bugs<strong>read more</strong>.</a>
</div>
```

It's sort of a solution to the fact that "read more" makes bad link text.  Bad.  And I don't write the copy.

Then I tried to style it with something like this:

```css
/* default link behaviour */
a {
    text-decoration:none;
    color:#8ec3e2;
}

a:visited {
    color:#6d80a8;
}

a:hover {
    color:#c1fcff;
}

/* overrides for this element */
.promo a {
    color:#000;
}

.promo a:hover {
    color:#000;
}

.promo a strong,
.promo a:visited strong {
    color:#8ec3e2;
    display:block;
}

.promo a:hover strong {
    color:#c1fcff;
}
```

Which did exactly what I wanted it to do... in FireFox but in IE 6 the hover was not displaying properly.  After a little tinkering the IE bug alarm bells started going off in the back of my head and Google provided [Tanfa's article on IE Pure CSS Pop Ups Bug](http://www.tanfa.co.uk/css/articles/pure-css-popups-bug.asp) in response to my query.

I added float:none to my declaration for `.promo a:hover{}` and all is now well :)

```css
.promo a:hover{
    color:#000;
}
```

Thank you Tanfa!
