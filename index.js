var fs = require('fs')

function isInvalidStrategy(pageStrategy) {
  const allowedStrategies = /(deafult)|(hbbtv)|(hbbtv2)|(html5hbbtvhybrid)|(html5hbbtvhybridappshow)|(htmlbroadcastvideo)|(playstation3)|(samsungmaple)|(samsungstreaming)|(uwp)/
  return pageStrategy && !pageStrategy.match(allowedStrategies)
}

function isInvalidElement(element) {
  const allowedElements = /(body)|(doctype)|(header)|(mimetype)|(rootelement)/
  return element && !element.match(allowedElements)
}

function getPageStrategyElement (pageStrategy, element) {
    if (!fs.existsSync(__dirname + '/' + pageStrategy + '/' + element) || isInvalidStrategy(pageStrategy) || isInvalidElement(element)) {
        return {
            noSuchStrategy: "file does not exist or is not allowed: " + __dirname + '/' + pageStrategy + '/' + element
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
