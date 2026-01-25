/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function (nums) {
  let suffixStart = nums.length - 1;

  while (suffixStart > 0 && nums[suffixStart - 1] < nums[suffixStart]) {
    suffixStart--;
  }

  return suffixStart;
};
