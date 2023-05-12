/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > Math.max(...nums) && nums[i] !== Math.max(...nums)) {
      return -1;
    }
  }

  return nums.indexOf(Math.max(...nums));
};
