/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    a.splice(index[i], 0, nums[i]);
  }

  return a;
};
