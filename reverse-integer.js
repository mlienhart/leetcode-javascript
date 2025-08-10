/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const result = Math.abs(x).toString().split("").reverse().join("");

  return result > 2 ** 31 ? 0 : x > 0 ? +result : -result;
};
