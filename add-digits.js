/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num.toString().length !== 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => +a + +b)
      .toString();
  }

  return +num;
};
