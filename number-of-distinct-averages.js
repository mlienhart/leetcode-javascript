/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const result = new Set();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length / 2; i++) {
    result.add((nums[i] + nums[nums.length - i - 1]) / 2);
  }

  return result.size;
};
