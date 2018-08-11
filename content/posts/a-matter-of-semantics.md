---
title: A Matter of Semantics
aliases:
  - /wordpress/2014/01/21/a-matter-of-semantics/
date: 2014-01-21 20:05:49
year: "2014"
id: 591
tags:
  - bcit
  - webdesign
---

_Adapted from a blog post on Web Services' blog at BCIT, the audience was our content community: people who contribute content using the CMS, with little to no technical experience._

Once, as part of a “getting to know you” activity at summer camp, I played a game where I was given a drawing and another camper was given a paper and pencil. Without her seeing the drawing, and without me seeing her paper, I had to try to get her to draw what I could see.

> “In the top left hand corner there’s a square, in the bottom right there’s a circle, big enough that it overlaps the square. Inside the circle is a triangle.”

It was impossible to end up with an exact copy of the drawing. Usually the original and new drawings were hilariously different.

Every time you visit a web site, your computer is playing this game with another computer on the other end of the internet. In order to avoid ending up with a hilariously different web site, the computers speak a few _really precise_ languages to each other.

A CMS (Content Management System) lets you make updates to a website without learning those languages. So you’re telling the CMS what you want to do and the CMS is translating your intention into one of those _really precise_ languages – HTML.

HTML doesn't tell the computer how to make things look. HTML tells the computer what things are: “this text is a link to another page”, “this text is a heading”, “this text a list of related stuff.” This is called **semantic markup**: the content is "marked up" with HTML to indicate its "semantics" or meaning.

When users view your website, their browser combines your HTML with files the developers have written in two other languages – CSS and JavaScript –  to create the web page that they see.

CSS tells the computer how things should look: “links are blue,” “headings are bold,” “list items have bullets.”

JavaScript tells the computer how things should work: “When the user clicks this button, show the user that paragraph.”

With just the HTML a computer can do all kinds of interesting things with your content. It can read it out loud, translate it into a different language, put it on a really big screen (or a really little one), or search through it.

## Sometimes things get misinterpreted.

When we edit pages in a CMS we see a visual metaphor instead of the plain HTML. We’re also playing the drawing game with the CMS. This means something that looks right might still not have the right HTML. Just because there are dots before that text doesn't mean it’s a list. Just because this text is bold doesn't mean it’s a heading.

## With the wrong HTML the other computers will make mistakes.

When a screen reader comes to a list it will tell the user that there's a list and how long it is, if the user has been to the page before and knows they need item number eight they can skip straight to it. With the wrong HTML the user has to skip past all the other items one at a time.

When a search engine is trying to identify what a page is about it looks for headings. Text that is marked up as an HTML heading is considered a better summary.

When the CSS (the way the website looks) changes the HTML doesn’t. In 2010 we changed how much space is between paragraphs on the website. Before we did this some editors had decided they wanted more space between their paragraphs and inserted it themselves by adding empty paragraphs, using markup to create visual formatting. After we made changes to the CSS their pages had huge spaces between paragraphs and it looked like something was wrong with them.

The mobile version of a website will often use the same HTML as a desktop version but different CSS. This is a very visual example of why separation of content and presentation matter.

From time to time, we see people use tables to impose a specific visual layout on their content, something that should really be done with CSS instead. Tables are hard for mobile browsers to handle because they are so wide. To avoid distorting content in them the tables could be re-arranged. This will make tables with data in them easier to read on a mobile phone but if the HTML says “this is a table” and what is inside is not data, just an image we wanted in a different position, things could end up looking like one of our drawing game pictures gone wrong.

## How to avoid errors.

There are some simple things that can be done to avoid problems:

* When you are copy and pasting into your CMS only paste plain text.
* Use your CMS's editing tool bar to communicate your intent to it. Use the buttons to create lists and the style drop down to create headings.
* When inserting images remember to fill in the "alt" text and ask if there is a class to help you position the image where you want it on the page.

Don't fight the default styles. The designer made careful decisions about how the HTML should be styled by the CSS using principles of graphic design and interface design and did user testing to refine them. This should make your job easier, you don't have to make these decisions yourself instead focus on the **purpose** of each part of your content instead of how it should look.

If you are experienced enough to be writing your own HTML pay attention to what the meaning of the elements are.
