/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let a = "0";

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let b = number.slice(0, i) + number.slice(i + 1);
      if (b > a) {
        a = b;
      }
    }
  }

  return a;
};
