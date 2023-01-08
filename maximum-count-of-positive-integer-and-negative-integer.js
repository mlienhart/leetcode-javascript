/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  return Math.max(
    nums.filter((x) => x > 0).length,
    nums.filter((x) => x < 0).length
  );
};
