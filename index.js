module.exports = function (ast, rework) {

    var tmpSelector = []
    var tmpDecls = {}
    var newDecls = []
    var deleteIndex = []

    ast.rules.forEach(function (rule, index, arr) {

        var selectors = rule.selectors.join(', ')
        var count = 0;

        tmpSelector.forEach(function (tmpS) {
            if (selectors === tmpS) {
                count++
                return
            }
        })

        if (!count) {
            tmpSelector.push(selectors)
            tmpDecls[selectors] = rule.declarations
            deleteIndex.push(index)
        }
        else {
            Array.prototype.push.apply(tmpDecls[selectors], rule.declarations)
            rule.declarations = tmpDecls[selectors]
        }
    })

    deleteIndex.forEach(function (index) {
        delete ast.rules.splice(index, 1)
    })

}
