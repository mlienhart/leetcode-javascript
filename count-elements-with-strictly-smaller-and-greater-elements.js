/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let a = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== Math.max(...nums) && nums[i] !== Math.min(...nums)) {
      a++;
    }
  }

  return a;
};
