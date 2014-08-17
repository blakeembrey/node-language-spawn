# Language Spawn

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Spawn a file process in any programming language based on [language-command](https://github.com/blakeembrey/node-language-command).

## Installation

```
npm install language-spawn --save
```

## Usage

```javascript
var spawn = require('language-spawn');

var test = spawn('JavaScript', 'test.js');

test.stdout.on('data', function (data) {
  console.log(data);
});

test.on('close', function (code) {
  console.log(code);
});
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/language-spawn.svg?style=flat
[npm-url]: https://npmjs.org/package/language-spawn
[travis-image]: https://img.shields.io/travis/blakeembrey/node-language-spawn.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/node-language-spawn
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/node-language-spawn.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/node-language-spawn?branch=master
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
