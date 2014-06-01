var assert = require('assert')
  , lindy_simple = require('./index')

test('number {{n}}', {n: 0}, 'number 0')

test('{{n}}', {n: null}, 'null')

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

test(
    'Felis catus is your {{ words.categorical }} {{ words.title }}'
  ,  {words: {categorical: 'taxonomic', title: 'nomenclature'}}
  , 'Felis catus is your taxonomic nomenclature'
)

function test(tpl_source, context, expected) {
  var tpl = lindy_simple(tpl_source)
  assert.equal(tpl(context), expected)
}
