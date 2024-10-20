/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    const firstIndexOfSmallestNumber = nums.indexOf(Math.min(...nums));
    nums[firstIndexOfSmallestNumber] =
      nums[firstIndexOfSmallestNumber] * multiplier;
  }

  return nums;
};
