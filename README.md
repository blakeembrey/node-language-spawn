# Language Spawn

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
