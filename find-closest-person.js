/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  return Math.abs(x - z) < Math.abs(y - z)
    ? 1
    : Math.abs(x - z) > Math.abs(y - z)
    ? 2
    : 0;
};
