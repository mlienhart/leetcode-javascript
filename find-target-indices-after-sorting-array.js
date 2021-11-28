/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      a.push(i);
    }
  }

  return a;
};
