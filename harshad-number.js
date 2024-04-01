/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const result = x
    .toString()
    .split("")
    .reduce((a, b) => +a + +b, 0);

  return x % result === 0 ? result : -1;
};
