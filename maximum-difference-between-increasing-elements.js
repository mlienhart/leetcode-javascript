/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let a = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        a = Math.max(a, nums[j] - nums[i]);
      }
    }
  }

  return a;
};
