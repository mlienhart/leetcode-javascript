/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    result.push({ key: key, value: value });
  }

  return result.filter((x) => x.value > nums.length / 3).map((x) => x.key);
};
