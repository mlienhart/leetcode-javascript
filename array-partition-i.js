/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    a.push(Math.min(nums[i], nums[i + 1]));
    i++;
  }

  return a.reduce((a, b) => a + b, 0);
};
