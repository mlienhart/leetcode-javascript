/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    a[i] = nums[nums[i]];
  }

  return a;
};
