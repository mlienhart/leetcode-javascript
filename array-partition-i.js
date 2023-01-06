/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(Math.min(nums[i], nums[i + 1]));
    i++;
  }

  return result.reduce((a, b) => a + b, 0);
};
