/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const elementFrequencies = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    elementFrequencies.set(nums[i], (elementFrequencies.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (elementFrequencies.get(nums[i]) === 1) {
      result.push(nums[i]);
    }
  }

  return result.reduce((a, b) => a + b, 0);
};
