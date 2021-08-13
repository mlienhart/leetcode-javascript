/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let a = new Map();
  let b = [];

  for (let i = 0; i < nums.length; i++) {
    a.set(nums[i], (a.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of a.entries()) {
    b.push({ key: key, value: value });
  }

  return b
    .sort((a, b) => (a.value < b.value ? 1 : -1))
    .slice(0, k)
    .map((x) => x.key);
};
