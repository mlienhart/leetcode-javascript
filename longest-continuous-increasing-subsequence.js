/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i - 1] < nums[i]) {
      a = Math.max(a, ++b);
    } else b = 1;
  }

  return a;
};
