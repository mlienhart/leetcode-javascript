/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let a = k;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      a++;
      continue;
    }
    if (a < k) {
      return false;
    }
    a = 0;
  }

  return true;
};
