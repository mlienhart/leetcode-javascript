/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
  const result = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  return result[0] * result[1];
};
