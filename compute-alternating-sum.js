/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
  return nums.reduce((a, b, x) => (x % 2 === 0 ? a + b : a - b));
};
