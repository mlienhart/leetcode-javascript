/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let a = new Map();
  let b = [];

  for (let i = 0; i < nums.length; i++) {
    a.set(nums[i], (a.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of a.entries()) {
    b.push({ key: key, value: value });
  }

  return b.filter((x) => x.value > nums.length / 3).map((x) => x.key);
};
