/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let result = "0";

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const sumWithoutCurrentValue = number.slice(0, i) + number.slice(i + 1);
      if (sumWithoutCurrentValue > result) {
        result = sumWithoutCurrentValue;
      }
    }
  }

  return result;
};
