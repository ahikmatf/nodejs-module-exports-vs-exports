function usingRecursive(number) {
    if (number == 1 || number == 0) {
        return 1
    } else {
        return number * usingRecursive(number - 1)
    }
}

function usingLoop(number) {
    let result = number
    for (let i = number - 1; i > 0; i--) {
        result *= i
    }
    console.log(result)
}

module.exports = { usingLoop, usingRecursive }

/**
 * if we use
 *  exports = { usingLoop, usingRecursive }
 * it won't be exported
 * unless we do it one by one
 *  exports.usingLoop = usingLoop
 *  exports.usingRecursive = usingRecursive
 */

/**
 * the
 *  module.exports = { usingLoop, usingRecursive }
 * is a shorthand property from
 *  module.exports = { 
 *      usingLoop: usingLoop, 
 *      usingRecursive: usingRecursive 
 *  }
 * because it has the same key and value name, ES6 
 */