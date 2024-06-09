/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      result ^= nums[i];
    }
  }

  return result;
};
