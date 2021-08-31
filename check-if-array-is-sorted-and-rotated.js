/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let a = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      a++;
    }
  }

  return a <= 1;
};
