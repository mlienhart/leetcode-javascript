/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  const smallestElementsSum = nums.slice(0, k).reduce((a, b) => a + b);
  const largestElementsSum = nums
    .slice(nums.length - k)
    .reduce((a, b) => a + b);

  return Math.abs(largestElementsSum - smallestElementsSum);
};
