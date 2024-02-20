/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  const result = Math.sign(nums.reduce((a, b) => a * b));

  return result > 0 ? 1 : result < 0 && result !== -0 ? -1 : 0;
};
