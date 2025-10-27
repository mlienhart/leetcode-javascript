/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n) {
  return +n.toString().split("").filter(Number).join("");
};
