/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  nums.sort((a, b) => (a < b ? 1 : -1));

  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) {
      return false;
    }
  }

  return true;
};
