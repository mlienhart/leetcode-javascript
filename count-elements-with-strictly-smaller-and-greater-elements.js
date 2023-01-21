/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  return nums.filter((x) => x > Math.min(...nums) && x < Math.max(...nums))
    .length;
};
