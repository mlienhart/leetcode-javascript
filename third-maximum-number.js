/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let a = [...new Set(nums)].sort((a, b) => b - a);

  return a[2] ?? Math.max(...a);
};
