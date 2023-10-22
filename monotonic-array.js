/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let firstResult = 0;
  let secondResult = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      firstResult++;
    }
    if (nums[i] <= nums[i + 1]) {
      secondResult++;
    }
  }

  return firstResult === nums.length - 1 || secondResult === nums.length - 1;
};
