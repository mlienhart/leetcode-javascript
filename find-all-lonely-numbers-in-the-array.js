/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  nums.sort((a, b) => (a < b ? -1 : 1));
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] !== nums[i - 1] &&
      nums[i] !== nums[i + 1] &&
      nums[i] !== nums[i - 1] + 1 &&
      nums[i] !== nums[i + 1] - 1
    ) {
      a.push(nums[i]);
    }
  }

  return a;
};
