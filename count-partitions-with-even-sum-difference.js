/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const leftSubarraySum = nums.slice(0, i + 1).reduce((a, b) => a + b);
    const rightSubarraySum = nums
      .slice(i + 1, nums.length)
      .reduce((a, b) => a + b);
    if ((leftSubarraySum - rightSubarraySum) % 2 === 0) {
      result++;
    }
  }

  return result;
};
