/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] !== nums[i - 1] &&
      nums[i] !== nums[i + 1] &&
      nums[i] !== nums[i - 1] + 1 &&
      nums[i] !== nums[i + 1] - 1
    ) {
      result.push(nums[i]);
    }
  }

  return result;
};
