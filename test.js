var assert = require('assert')
  , jigplate = require('./index')

test('Hello, world!', {}, 'Hello, world!')

test(
    'hello {{ world }} how is your {{ weekday }} going?'
  , {world: 'dude', weekday: 'tuesday'}
  , 'hello dude how is your tuesday going?'
)

test(
    '{{first}}{{second}}'
  , {first: '{{ second }}', second: '{{ first }}'}
  , '{{ second }}{{ first }}'
)

test('{{ whoops }} literal {{ a b }}{{', {}, ' literal {{ a b }}{{')

function test(jig, context, expected) {
  var tpl = jigplate(jig)
  assert.equal(tpl(context), expected)
}
