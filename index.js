var peek = require('peek')

module.exports = function lindy_simple(tpl) {
  function lindy_simple_text(text) {
    return function() { return text }
  }

  function lindy_simple_variable(var_name) {
    var peeker = peek(var_name)
    return function(context) {
      return peeker(context) || ''
    }
  }

  var ops = []
    , match

  while(tpl.length) {
    match = tpl.match(/\{\{\s*([\w\d\-\.]+)\s*\}\}/)
    if(!match) {
      ops.push(lindy_simple_text(tpl))
      break
    }

    if(match.index > 0) {
      ops.push(lindy_simple_text(tpl.slice(0, match.index)))
    }
    ops.push(lindy_simple_variable(match[1]))
    tpl = tpl.slice(match.index + match[0].length)
  }

  return function lindy_simple_template(context) {
    return ops.reduce(function(prior, current) {
      return prior + current(context)
    }, '')
  }
}
