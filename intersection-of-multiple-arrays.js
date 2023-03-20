/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  const result = [];

  for (let i = 0; i < nums[0].length; i++) {
    if (nums.every((x) => x.includes(nums[0][i]))) {
      result.push(nums[0][i]);
    }
  }

  return result.sort((a, b) => a - b);
};
