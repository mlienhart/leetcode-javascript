/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let a = nums.map((x) => x).sort((a, b) => (a < b ? -1 : 1));
  let b = nums.map((x) => x).sort((a, b) => (a > b ? -1 : 1));

  return b[0] * b[1] - a[0] * a[1];
};
