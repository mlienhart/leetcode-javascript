/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
  return matrix.map((x) => x.reduce((a, b) => a + b, 0));
};
