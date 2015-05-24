var dprop = require('./')
var test = require('tape')

test('tiny util for making enumerable properties', function (t) {
  var prop = dprop(function () {
    return 'foo'
  })

  t.equals(prop.configurable, true)
  t.equals(prop.enumerable, true)
  t.equals(prop.get(), 'foo')
  t.equals(prop.set, undefined)

  prop = dprop(function () {
    return 'foo'
  }, function () {
    return 'boo'
  })

  t.equals(prop.configurable, true)
  t.equals(prop.enumerable, true)
  t.equals(prop.get(), 'foo')
  t.equals(prop.set(), 'boo')
  t.end()
})
