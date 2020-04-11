<h1 align="center">
Binarysjs
</h1>
<p align="center">
  A simple npm library to make binary search with javascript
</p>

<div margin="10px 0" align="center">
    <img alt="Github Top Language" src="https://img.shields.io/github/languages/top/giovaniif/binaryjs">
    <img alt="Github language count" src="https://img.shields.io/github/languages/count/giovaniif/binaryjs">
    <img alt="Size" src="https://img.shields.io/github/repo-size/giovaniif/binaryjs">
    <img alt="GitHub" src="https://img.shields.io/github/license/giovaniif/binaryjs">
</div>

## :information_source: How to use
```bash
  $ npm install binarysjs
  # $ yarn add binarysjs
```

```typescript
  const {default: getIndex} = require('binarysjs');

  const index = getIndex(target, array, startIndex?, endIndex?)
  // target = The value you want to find
  // array = The array you want to search in
  // startIndex && endIndex = optional parameters you don't want to check the whole array
```
### Return values
- Any number bigger than or equal to zero:  Found value index
- -1: Value not found


## :rocket: Techs
- Node.js
- Typescript
- Jest

## :memo: License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

Made with :hearts: by Giovani Farias :wave: [Get in touch!](https://www.linkedin.com/in/giovani-ricco-farias-b97316186/)