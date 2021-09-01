/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      a++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i + 1]) {
      b++;
    }
  }

  return a === nums.length - 1 || b === nums.length - 1;
};
