/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let a = nums
    .join("")
    .split("0")
    .sort((a, b) => (a < b ? 1 : -1));

  return a[0].length;
};
