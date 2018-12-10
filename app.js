const addition = require('./src/addition')
const empty = require('./src/empty')
const substraction = require('./src/substraction')
const calculator = require('./src/hypebeast-calculator')
const multiplication = require('./src/multiplication')
const division = require('./src/division')
const factorial = require('./src/factorial')


addition.twoNumbers(1, 3)
addition.threeNumbers(1, 3, 6)

substraction.twoNumbers(2, 0)

console.log(calculator.quadratic(3))
console.log(calculator.cubic(5))

/**
 * multiplication.usingLet(1, 3)
 * multiplication.usingVar(1, 3)
 * 
 *  failed to load since it is not exported
 */
multiplication.usingExport(4, 3)

/**
 * division.thatPrintsInteger(4, 2)
 * division.thatPrintsFloat(3, 2)
 * division.thatPrintsString(1, 4)
 * division.thatPrintsMyFirstName(1, 4)
 * 
 *  that kind of exports is not exported on 'require'
 */
division.thatPrintsMyLastName(4, 6)

factorial.usingLoop(4)
console.log(factorial.usingRecursive(4))