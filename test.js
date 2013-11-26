var assert = require('assert')
  , jigplate = require('./index')

test('Hello, world!', {}, 'Hello, world!')

test(
  'hello {{ world }} how is your {{ weekday }} going?',
  { world: 'dude', weekday: 'tuesday' },
  'hello dude how is your tuesday going?'
)

test(
  '{{first}}{{second}}',
  { first: '{{ second }}', second: '{{ first }}' },
  '{{ second }}{{ first }}'
)

test(
  '{{ whoops }} is my favorite {{ a b }}{{',
  {},
  ' is my favorite {{ a b }}{{'
)

function test(jig, context, expected) {
  var tpl = jigplate(jig)
  assert.equal(tpl(context), expected)
}
