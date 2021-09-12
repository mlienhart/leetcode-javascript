/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    a.push({ key: key, value: value });
  }

  return a.sort((a, b) => (a.value > b.value ? -1 : 1))[0].key;
};
