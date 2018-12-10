module.exports.twoNumbers = (number1, number2) => {
    console.log(number1 + number2)
}

function threeNumbers(number1, number2, number3) {
    console.log(number1 + number2 + number3)
}

/**
 * module.exports = threeNumbers
 *  this will breaks the twoNumbers
 *  instead, do this
 */
module.exports.threeNumbers = threeNumbers

console.log("-- START addition.js")
console.log("this thing is printed when the module is 'require-ed'")
console.log("-- END addition.js")

/**
 * if you are having 2 lines that says
 *  module.exports = { twoNumbers }
 *  module.exports = { threeNumbers }
 * then the 'twoNumbers' won't be exported because it is overwritten, and if you do
 *  module.exports = threeNumbers
 * will also will not be exported, since you are overwriting the exports part of the module
 */