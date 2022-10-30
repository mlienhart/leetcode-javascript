/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let a = nums.filter((x) => x % 6 === 0);

  return a.length > 0 ? Math.floor(a.reduce((a, b) => a + b) / a.length) : 0;
};
