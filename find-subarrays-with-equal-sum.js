/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const a = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (a.has(nums[i] + nums[i + 1])) {
      return true;
    }
    a.add(nums[i] + nums[i + 1]);
  }

  return false;
};
