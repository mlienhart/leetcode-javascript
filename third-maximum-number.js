/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const result = [...new Set(nums)].sort((a, b) => b - a);

  return result[2] ?? Math.max(...result);
};
