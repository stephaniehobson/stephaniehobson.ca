---
title: Typography Test Page
noindex: true
---
<h1>Heading 1</h1>
<p>This bug seems to apply to styling elements under a class or id within a link on hover.  Stuff like <code>.class a:hover span{}</code> or <code>#id a:hover strong{}</code>.  The solution is to define a property on the parent link <code>.class a:hover{}</code> that hasn’t been declared anywhere else in your CSS, like a text indent of 0 or something.</p>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<blockquote>I don't know who's telling you that Mario Lemieux is the brains of the operation, 'cause Trevor Linden and Celine Dion are both the brains of the operation. Hey, check this out! Theres two-four and lacrosse stick  in these machines, eh? </blockquote>
<h4>Heading 4</h4>
<p>I don't know who's telling you that Mario Lemieux is the brains of the operation, <a href="#">'cause Trevor Linden and Celine Dion are both the brains of the operation</a>. Hey, check this out! Theres two-four and lacrosse stick  in these machines, eh? </p>
<p>I don't know who's telling you that Mario Lemieux is the brains of the operation, 'cause Trevor Linden and Celine Dion are both the brains of the operation. Hey, check this out! Theres two-four and lacrosse stick  in these machines, eh? And Deadmau5, you've been reading a copy of Chatelaine, from 1983. Denied, Ouch, Drake got their ribs rattled. I'm Constable Jason Priestly.</p>
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
  <dd>Definition</dd>
  <dt>Term</dt>
  <dd>Definition</dd>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
<p>I don't know who's telling you that Mario Lemieux is the brains of the operation, 'cause Trevor Linden and Celine Dion are both the brains of the operation. Hey, check this out! Theres two-four and lacrosse stick  in these machines, eh? And Deadmau5, you've been reading a copy of Chatelaine, from 1983. Denied, Ouch, Drake got their ribs rattled. I'm Constable Jason Priestly.</p>
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
  <li>four</li>
</ul>

<p>I don't know who's telling you that Mario Lemieux is the brains of the operation, 'cause Trevor Linden and Celine Dion are both the brains of the operation. Hey, check this out! Theres two-four and lacrosse stick  in these machines, eh? And Deadmau5, you've been reading a copy of Chatelaine, from 1983. Denied, Ouch, Drake got their ribs rattled. I'm Constable Jason Priestly.</p>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p class="test test2">This is my first CSS example</p>
    <!-- comment -->
    <ul>
      <li>This is</li>
      <li>a list</li>
    </ul>

    <a href="http://www.example.com"
    onclick="trackOutboundLink('http://www.example.com'); return false;">
        Check out example.com
    </a>
  </body>
</html>
```
```css
@import url(/Stuff);
@import url('/Stuff');

@font-face {
    src: url(Stuff);
    font-family: 'main';
}
/* comment */
#id .class a:hover {
    color: #00f;
}
h1 {
  color: blue;
  background-color: yellow !important;
  border: 1px solid black;
}

p:first-child {
  color: red;
  background-color: rgba(255, 255, 255, 0.8);
}

p, li {
  text-decoration: underline;
}
```
```js
// comment
/*
   multi
   line
   comment
 */
var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {
        'transport': 'beacon',
        'hitCallback': function(){document.location = url;}
    });
}
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let test = false;
test += 1;


var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
        encode: function (tokens) {
            if (tokens instanceof Token) {
                return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
            } else if (_.util.type(tokens) === 'Array') {
                return tokens.map(_.util.encode);
            } else {
                return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            }
        },

        type: function (o) {
            return Object.prototype.toString.call(o).slice(8, -1);
        },

        objId: function (obj) {
            if (!obj['__id']) {
                Object.defineProperty(obj, '__id', { value: ++uniqueId });
            }
            return obj['__id'];
        },

        // Deep clone a language definition (e.g. to extend it)
        clone: function (o, visited) {
            var type = _.util.type(o);
            visited = visited || {};

            switch (type) {
                case 'Object':
                    if (visited[_.util.objId(o)]) {
                        return visited[_.util.objId(o)];
                    }
                    var clone = {};
                    visited[_.util.objId(o)] = clone;

                    for (var key in o) {
                        if (o.hasOwnProperty(key)) {
                            clone[key] = _.util.clone(o[key], visited);
                        }
                    }

                    return clone;

                case 'Array':
                    if (visited[_.util.objId(o)]) {
                        return visited[_.util.objId(o)];
                    }
                    var clone = [];
                    visited[_.util.objId(o)] = clone;

                    o.forEach(function (v, i) {
                        clone[i] = _.util.clone(v, visited);
                    });

                    return clone;
            }

            return o;
        }
    },
}
```

<p>I don't know who's telling you that Mario Lemieux is the brains of the operation, 'cause Trevor Linden and Celine Dion are both the brains of the operation. Hey, check this out! Theres two-four and lacrosse stick  in these machines, eh? And Deadmau5, you've been reading a copy of Chatelaine, from 1983. Denied, Ouch, Drake got their ribs rattled. I'm Constable Jason Priestly.</p>
