/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let a = new Map();
  let b = [];

  for (let i = 0; i < nums.length; i++) {
    a.set(nums[i], (a.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (a.get(nums[i]) === 1) {
      b.push(nums[i]);
    }
  }

  return b.reduce((a, b) => a + b, 0);
};
