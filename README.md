# dprop

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Stupidly small utility for making enumerable and configurable getter/setter objects, because ES5 is annoying.

Before:

```js
Object.defineProperties(obj, {
  foo: {
    configurable: true,
    enumerable: true,
    get: function() {
      return 'blah'
    }
  },
  bar: {
    configurable: true,
    enumerable: true,
    get: function() {
      return 'foobar'
    }
  }
})
```

After:

```js
var getter = require('dprop')

Object.defineProperties(obj, {
  foo: getter(function() {
    return 'blah'
  }),
  bar: getter(function() {
    return 'foobar'
  })
})
```

## Usage

[![NPM](https://nodei.co/npm/dprop.png)](https://www.npmjs.com/package/dprop)

#### `dprop([get], [set])`

Returns a `{ configurable: true, enumerable: true }` object with the specified (optional) `get` and `set` functions.

## See Also

- [d](https://www.npmjs.com/package/d) - a little more feature rich

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/dprop/blob/master/LICENSE.md) for details.
