/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let a = Math.sign(nums.reduce((a, b) => a * b));

  return a > 0 ? 1 : a < 0 && a !== -0 ? -1 : 0;
};
