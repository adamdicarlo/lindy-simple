var assert = require('assert')
  , lindy = require('./index')

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

test(
    'Roses are {{c1}}\nviolets are {{c2}}\ntemplates are {{adj}}\n{{punchline}}'
  , {c1: 'pink', c2: 'purple', adj: 'useful', punchline: 'ERROR: rhyme not found'}
  , 'Roses are pink\nviolets are purple\ntemplates are useful\nERROR: rhyme not found'
)

function test(jig, context, expected) {
  var tpl = lindy(jig)
  assert.equal(tpl(context), expected)
}
