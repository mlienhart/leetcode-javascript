/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maximumSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maximumSum = Math.max(maximumSum, currentSum);
  }

  return maximumSum;
};
