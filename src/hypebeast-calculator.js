const CoolCalculator = require('./cool-calculator')

class HypebeastCalculator extends CoolCalculator {
    cubic(number) { return this.quadratic(number) * number }
}

module.exports = new HypebeastCalculator()