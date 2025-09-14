/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  return new Set(nums).size === 1 ? 0 : 1;
};
