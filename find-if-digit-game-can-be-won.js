/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  return (
    nums.filter((x) => x < 10).reduce((a, b) => a - b, 0) !==
    nums.filter((x) => x >= 10).reduce((a, b) => a - b, 0)
  );
};
