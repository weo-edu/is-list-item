module.exports = function(node) {
  return node.nodeType === 1 && node.tagName === 'LI'
}