/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  return !n
    .toString(2)
    .split("")
    .filter((x, y, i) => x === y[i - 1]).length;
};
