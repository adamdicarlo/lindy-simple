module.exports = function lindy(hop) {
  return function(context) {
    return hop.replace(/\{\{\s*(\w+)\s*\}\}/g, function(match, p1) {
      return context[p1] || ''
    })
  }
}
