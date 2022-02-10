/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let a = [];
  let b = [];
  let c = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] < pivot
      ? a.push(nums[i])
      : nums[i] === pivot
      ? b.push(nums[i])
      : c.push(nums[i]);
  }

  return [...a, ...b, ...c];
};
