var fs = require('fs')

function getPageStrategyElement (pageStrategy, element) {
    if (!fs.existsSync(__dirname + '/' + pageStrategy + '/' + element)) {
        return {
            noSuchStrategy: "file does not exist: " + __dirname + '/' + pageStrategy + '/' + element
        }
    }
    var pageStrategyPath = __dirname + '/' + pageStrategy + '/' + element;
    return {
        data: fs.readFileSync(pageStrategyPath).toString()
    }
}

function getOrDefault (strategyName, element) {
  var strategy = getPageStrategyElement(strategyName, element)

  if (strategy.noSuchStrategy) {
    return getPageStrategyElement('default', element)
  }
  return strategy
}

module.exports = {
  getPageStrategyElement,
  getOrDefault
}
