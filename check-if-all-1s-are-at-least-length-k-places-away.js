/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let increment = k;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      increment++;
      continue;
    }
    if (increment < k) {
      return false;
    }
    increment = 0;
  }

  return true;
};
