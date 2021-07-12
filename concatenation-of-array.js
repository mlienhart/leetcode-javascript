/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let a = [];

  for (i = 0; i < nums.length; i++) {
    a.push(nums[i]);
  }

  for (i = 0; i < nums.length; i++) {
    a.push(nums[i]);
  }

  return a;
};
