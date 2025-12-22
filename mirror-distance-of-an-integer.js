/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  return Math.abs(n - +n.toString().split("").reverse().join(""));
};
