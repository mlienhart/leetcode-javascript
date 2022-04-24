/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (original === nums[i]) {
      original *= 2;
    }
  }

  return original;
};
