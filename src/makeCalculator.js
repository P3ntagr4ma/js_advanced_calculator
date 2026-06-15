'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
  };

  calculator.add = (a) => {
    calculator.result += a;

    return calculator;
  };

  calculator.subtract = (a) => {
    calculator.result -= a;

    return calculator;
  };

  calculator.multiply = (a) => {
    calculator.result *= a;

    return calculator;
  };

  calculator.divide = (a) => {
    calculator.result /= a;

    return calculator;
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };
  calculator.operate = (operation, a) => operation(a);

  return calculator;
}

module.exports = makeCalculator;
