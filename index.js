var fs = require('fs')

module.exports = {
    getPageStrategyElement: function(pageStrategy, element) {
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
}