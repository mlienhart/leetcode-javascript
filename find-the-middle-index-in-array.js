/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.slice(0, i).reduce((a, b) => a + b, 0) ===
      nums.slice(i + 1).reduce((a, b) => a + b, 0)
    ) {
      return i;
    }
  }

  return -1;
};
