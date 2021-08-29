/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let a = [...nums].sort((a, b) => (a >= b ? -1 : 1));

  return a[k - 1];
};
