/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let a = [...nums].sort((a, b) => a - b);
  let b = [...nums].sort((a, b) => b - a);

  return b[0] * b[1] - a[0] * a[1];
};
