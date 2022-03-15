/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => (a <= b ? 1 : -1))[k - 1];
};
