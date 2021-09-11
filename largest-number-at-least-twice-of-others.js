/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let a = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > a && nums[i] !== a) {
      return -1;
    }
  }

  return nums.indexOf(a);
};
