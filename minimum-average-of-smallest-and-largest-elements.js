/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    result.push((nums[i] + nums[nums.length - i - 1]) / 2);
  }

  return Math.min(...result);
};
