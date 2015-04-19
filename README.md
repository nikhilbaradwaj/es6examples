# es6examples

[![Join the chat at https://gitter.im/nikhilbaradwaj/es6examples](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nikhilbaradwaj/es6examples?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![ES6 Logo](es6.png)

---

> **Marty McFly:** Wait a minute. Wait a minute, Doc. Ah... Are you telling me that you built a time machine... out of a DeLorean?

> **Dr. Emmett Brown:** The way I see it, if you're gonna build a time machine into a car, why not do it with some *style?*

> **"Back to the Future"**

---

## Overview

This repository is a bunch of code examples to explore the latest and greatest in *ecmascript 6* and beyond.

The gulp setup here will let you write the future of javascript today.

The goal is to cover all new features that are introduced in es6 and to check their es5 equivalents using [babel](https://babeljs.io/) and [traceur](https://github.com/google/traceur-compiler/blob/master/README.md) transpilers.

For when you find mistakes in my code, have suggestions or need help - join the chat [here](https://gitter.im/nikhilbaradwaj/es6examples)

## Usage

To further explore and add to these examples, you can first clone the repo. Then do the following - 

    $ npm install
    $ gulp


The default task in gulp will compile the code in the 'es6' directory and dump two folders 'es5-babel' and 'es5-traceur' which has the 
respective transpiled code to es5 by the two popular transpilers.

## Tests

    $ npm install
    $ gulp test

## Credits

Nikhil Baradwaj

## License

[The MIT License](http://opensource.org/licenses/MIT)

**Copyright (c) 2015 Nikhil Baradwaj**