var peek = require('peek')

module.exports = function lindy_simple(tpl) {
  function text(text) {
    return function lindy_simple_text() { return text }
  }

  function variable(var_name) {
    var peeker = peek(var_name)
    return function lindy_simple_variable(context) {
      var value = peeker(context)
      return (typeof value === 'undefined') ? '' : value
    }
  }

  var ops = []
    , match

  while(tpl.length) {
    match = tpl.match(/\{\{\s*([\w\d\-\.]+)\s*\}\}/)
    if(!match) {
      ops.push(text(tpl))
      break
    }

    if(match.index > 0) {
      ops.push(text(tpl.slice(0, match.index)))
    }
    ops.push(variable(match[1]))
    tpl = tpl.slice(match.index + match[0].length)
  }

  return function lindy_simple_template(context) {
    return ops.reduce(function(prior, current) {
      return prior + current(context)
    }, '')
  }
}
