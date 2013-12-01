module.exports = function lindy_simple(tpl) {
  function static_text(text) {
    return function() { return text }
  }

  function variable(var_name) {
    return function(context) { return context[var_name] || '' }
  }

  var ops = []
    , match

  while(tpl.length) {
    match = tpl.match(/\{\{\s*(\w+)\s*\}\}/)
    if(!match) {
      ops.push(static_text(tpl))
      break
    }

    if(match.index > 0) {
      ops.push(static_text(tpl.slice(0, match.index)))
    }
    ops.push(variable(match[1]))
    tpl = tpl.slice(match.index + match[0].length)
  }

  return function lindy_simple_tpl(context) {
    return ops.reduce(function(prior, current) {
      return prior + current(context)
    }, '')
  }
}
