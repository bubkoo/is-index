# is-index

> Checks if the given value is a valid array-like index.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-index/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-index/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-index)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-index/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-index)


## Install

```
$ npm install --save is-index 
```


## Usage

```js
var isIndex = require('is-index');

isIndex(1);        // => true
isIndex(1, 5);     // => true
isIndex('1');      // => true
isIndex('1', 5);   // => true
isIndex('1', '5'); // => true

isIndex();         // => false
isIndex(null);     // => false
isIndex(true);     // => false
isIndex({});       // => false
isIndex([]);       // => false
```

## API

### isIndex(value, length)

`value` - The value to check.
`length` - The upper bounds of a valid index. Default is MAX_SAFE_INTEGER.

## Related

- [is-nil](https://github.com/bubkoo/is-nil) - Checks if the given value is null or undefined.
- [is-null](https://github.com/bubkoo/is-null) - Checks if the given value is null.
- [is-window](https://github.com/bubkoo/is-window) - Checks if the given value is a window object.
- [is-native](https://github.com/bubkoo/is-native) - Checks if the given value is a native function.
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/is-index/issues/new).
