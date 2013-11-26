module.exports = function jigplate(jig) {
  return function(context) {
    return jig.replace(/\{\{\s*(\w+)\s*\}\}/g, function(match, p1) {
      return context[p1] ? context[p1] : ''
    })
  }
}
