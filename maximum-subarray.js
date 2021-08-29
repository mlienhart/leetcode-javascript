/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let a = nums[0];
  let b = nums[0];

  for (let i = 1; i < nums.length; i++) {
    a = Math.max(nums[i], a + nums[i]);
    b = Math.max(b, a);
  }

  return b;
};
