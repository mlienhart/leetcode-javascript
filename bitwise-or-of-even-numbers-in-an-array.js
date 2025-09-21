/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function (nums) {
  return nums.filter((x) => x % 2 === 0).reduce((a, b) => a | b, 0);
};
