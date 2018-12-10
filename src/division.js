exports = {
    thatPrintsInteger(number1, number2) {
        console.log(parseInt(number1 / number2))
    }
}

exports = {
    thatPrintsFloat: (number1, number2) => {
        console.log(parseFloat(number1 / number2))
    }
}

console.log("-- START division.js")
console.log(exports)

exports = module.exports
console.log(exports)

exports = {
    thatPrintsString(number1, number2) {
        let result = number1 / number2
        result.toString()
        console.log(`the type is ${typeof result} with containt ${result}`)
    }
}
console.log(exports)

exports.thatPrintsMyFirstName = (number1, number2) => {
    console.log("Asep")
}

exports = module.exports
exports.thatPrintsMyLastName = (number1, number2) => {
    console.log("Fatahillah")
}


console.log("-- END division.js")
