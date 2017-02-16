# switch-case

switch-case is a npm package to simplify switch syntax in javascript

## Install

```bash
npm install switch-case
# yarn add switch-case
```

## Basic Usage

```js
const switchCase = require('switch-case')

let switcher = switchCase({
  'ten': 10,
  'twenty': 20,
}, 0)

console.log(switcher('ten'))            // 10
console.log(switcher('twenty'))         // 20
console.log(switcher('something else')) // 0
```

## Function as corresponding value

```js
const switchCase = require('switch-case')

let switcher = switchCase({
  'ten': () => 10,
  'twenty': () => 20,
}, () => 0)

console.log(switcher('ten'))            // 10
console.log(switcher('twenty'))         // 20
console.log(switcher('something else')) // 0
```
