/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  return nums.map((x) => Math.max(...nums) - x).reduce((a, b) => a + b);
};
