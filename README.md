# @isaac-m/console

[![Latest Version on NPM](https://img.shields.io/npm/v/%40isaac-m%2Fconsole.svg?style=flat)](https://www.npmjs.com/package/@isaac-m/console)

Returns the argument passed into a logging function. For logging arguments a *tiny* bit more easily.

```js
// With native console
const arg = 'arg';
console.log(arg);
exampleFunction(arg);

// With log
exampleFunction(log('arg'));
```

## Installation

```sh
npm i @isaac-m/console
```

### Usage

```js
import { log } from "@isaac-m/console";

const str = log("This is a string.");
```

### Functions
- debug
- error
- info
- log
- warn
