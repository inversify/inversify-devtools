# inversify-devtools

[![Join the chat at https://gitter.im/inversify/InversifyJS](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/inversify/InversifyJS?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://secure.travis-ci.org/inversify/devtools.svg?branch=master)](https://travis-ci.org/inversify/devtools)
[![npm version](https://badge.fury.io/js/inversify-devtools.svg)](http://badge.fury.io/js/inversify-devtools)
[![Dependencies](https://david-dm.org/inversify/devtools.svg)](https://david-dm.org/inversify/devtools#info=dependencies)
[![Dependencies](https://david-dm.org/inversify/devtools/dev-status.svg)](https://david-dm.org/inversify/devtools/#info=devDependencies)
[![Dependencies](https://david-dm.org/inversify/devtools/peer-status.svg)](https://david-dm.org/inversify/devtools/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/inversify/devtools/badge.svg)](https://snyk.io/test/github/inversify/devtools)

[![NPM](https://nodei.co/npm/inversify-devtools.png?downloads=true&downloadRank=true)](https://nodei.co/npm/inversify-devtools/)
[![NPM](https://nodei.co/npm-dl/inversify-devtools.png?months=9&height=3)](https://nodei.co/npm/inversify-devtools/)

A React/Redux application that powers the InversifyJS browser development tools.

![](https://raw.githubusercontent.com/inversify/inversify-devtools/master/media/1.png)
![](https://raw.githubusercontent.com/inversify/inversify-devtools/master/media/2.png)
![](https://raw.githubusercontent.com/inversify/inversify-devtools/master/media/3.png)

You can use this project to add features to the suported browsers extensions.

### How to use this project?

> NOTE: this project contains a web applicaiton used to power the browser extansions. If you are  an InverisfyJS user looking for a browser extension you should visit the extension projects:
> - [inversify-chrome-devtools](https://github.com/inversify/inversify-chrome-devtools)

To use this project you must install it using npm:

```
$ npm install --save inversify-devtools
$ npm install --save-dev inversify-dts
```
You can use the `connectKernel` function to connect an instance of the `Kernel` class to the devtools:

```ts
/// <reference path="node_modules/inversify-dts/inversify-devtools/inversify-devtools.d.ts"/>

import render from "inversify-devtools";
import { Kernel } from "inversify";

let containerId = "root";
let connectKernel = render(containerId);
let kernel = new Kernel();
connectKernel(kernel);
```

### License
License under the MIT License (MIT)

Copyright © 2015 [Remo H. Jansen](http://www.remojansen.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or 
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. 

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR 
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
