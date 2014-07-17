module.exports = function (ast, rework) {

    var tmpSelector = []
    var newDecls = []

    ast.rules.forEach(function visit(rule) {
        if (rule.rules) rule.rule.forEach(visit);

        rule.selectors.forEach(function (selector) {
            if (s !== []) {
                var count = 0;
                tmpSelector.forEach(function (tmpS) {
                    if (selector === tmpS) count++;
                })
                if (!count) {
                    rule.declarations.forEach(function (declaration) {
                        newDecls.push(declaration)
                    })
                }
            } else {
                tmpSelector.push(selector)
                rule.declarations.forEach(function (declaration) {
                    newDecls.push(declaration)
                })

            }
        })
    })

    console.log(newDecls)
}
