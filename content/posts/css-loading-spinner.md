---
title: CSS Loading Spinner
aliases:
  - /wordpress/2011/09/06/css-loading-spinner/
date: 2011-09-06 14:34:49
year: "2011"
id: 406
tags:
  - code
  - webdesign
---

I needed a loading spinner for a side project the other day but I was too lazy to steal someone else's off the internet or try to re-learn making an animated GIF so I just coded my own in CSS (CSS is [my hammer](http://en.wikipedia.org/wiki/Law_of_the_instrument)).

On the bright side it works on any background colour and is a little transparent which is neat. And it's _way_ faster to adjust the colour scheme than an image file would be.

<iframe src="http://stephaniehobson.ca/loading-spinner/" scrolling="no" height="210px" width="100%" style="border:0"></iframe>

## The basic idea

It's one `<div>` containing 8 `<span>`s, styled to be little grey lozenges:

```css
.spinner span {
    display:block;
    height:13px;
    width:5px;
    border-radius: 2px;
    background-color:rgba(77, 77, 77,0.5);
    ...
```

In anticipation of rotating them I moved the `transform-origin` to the middle of the element and then a significant way down beneath it. Later, when I rotate the lozenges this spaces them further apart.

```css
    ...
    transform-origin: 50% 160%;
    ...
```

They all have a simple animation applied to them that makes them fade in and out (it has a bit of an opacity on it just for fun):

```css
    ...
    animation-name: fade;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode:backwards;
}

@keyframes fade {
    0% {
        background-color:rgba(77, 77, 77,0.8);
    }
    40% {
        background-color:rgba(77, 77, 77,0.8);
    }
    100% {
        background-color:rgba(255, 255, 255,0.8);
    }
}
```

Using `nth-of-type` each lozenge is rotated 45degrees more than the last and has a delay of 250ms added to the animation on it. Unfortunately there is no easy way to do this program-magically so they have to be specified for each. Here is an example of the code for the second one:

```css
.spinner span:nth-of-type(2) {
    transform: rotate(45deg);
    animation-delay: -750ms;
}
```

## Starting in the middle

Did you know that you can provide a _negative_ value for `animation-delay`? Cool, eh?!?! This means I can make it appear that the animation is beginning in the middle, otherwise the first time it's run it looks funny.

## Placing the spinner

I added some absolute positioning to the `<span>`s, so the origin of the transform is at the top left of their parent `<div>`. This means the spinner fans out from the top left of the `<div>` and you can absolutely position it to exactly where you want the _middle_ of the spinner.  Handy if you want to place the spinner in the middle of something, like I did.

```css
.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
}

.spinner span {
    position: absolute;
    top: -20px;
    left: -3px;
    ...
```

## Changing the colour

Changing the colour is as simple as creating a new animation and applying that to your special spinner spans.

```css
.special .spinner span {
    animation-name: specialfade;
}
```

## Using it

[Here's the loading spinner](http://stephaniehobson.ca/loading-spinner/) with the `moz` and `webkit` prefixes. Of course, it only works in browsers that support animation and transforms but there's more and more of those these days.

Also, yes, totally, please use it. [Tweet me](http://twitter.com/stephaniehobson) if you make any improvements.

## A little bit more

I got a little carried away and made a few [other styles](http://stephaniehobson.ca/loading-spinner/other-styles.html).
