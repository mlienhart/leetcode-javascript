/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let a = [];

  for (let i = 0; i < nums[0].length; i++) {
    if (nums.every((x) => x.includes(nums[0][i]))) {
      a.push(nums[0][i]);
    }
  }

  return a.sort((a, b) => a - b);
};
