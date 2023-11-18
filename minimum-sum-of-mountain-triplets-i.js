/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j]) {
          result.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }

  return result.length > 0 ? Math.min(...result) : -1;
};
