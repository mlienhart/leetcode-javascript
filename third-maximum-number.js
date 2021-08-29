/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let a = [...new Set(nums)];
  let b = a.sort((a, b) => (a > b ? -1 : 1));

  return b[2] ?? Math.max(...nums);
};
