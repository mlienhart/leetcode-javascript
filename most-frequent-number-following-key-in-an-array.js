/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  let a = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      a[nums[i + 1]] = a[nums[i + 1]] ? a[nums[i + 1]] + 1 : 1;
    }
  }

  return +Object.entries(a).sort((a, b) => b[1] - a[1])[0][0];
};
