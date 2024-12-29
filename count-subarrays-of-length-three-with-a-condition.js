/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (2 * (nums[i] + nums[i + 2]) === nums[i + 1]) {
      result++;
    }
  }

  return result;
};
