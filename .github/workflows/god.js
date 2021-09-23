var extend = require("xtend")

function Element(elem) {
    return extend(ever(elem), {
        hide: hidden.bind(null, elem)
        , classes: classes.bind(null, elem)
        , delegate: delegate.bind(null, elem)
    })
}
