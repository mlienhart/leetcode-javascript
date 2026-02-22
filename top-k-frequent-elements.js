/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const elementFrequencies = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    elementFrequencies.set(nums[i], (elementFrequencies.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of elementFrequencies.entries()) {
    result.push({ key: key, value: value });
  }

  return result
    .sort((a, b) => (a.value < b.value ? 1 : -1))
    .slice(0, k)
    .map((x) => x.key);
};
