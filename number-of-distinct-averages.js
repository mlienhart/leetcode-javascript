/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  let a = new Set();
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    a.add((nums.shift() + nums.pop()) / 2), (i = 0);
  }

  return a.size;
};
