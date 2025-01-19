/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  const circularArray = [nums[nums.length - 1], ...nums, nums[0]];
  let result = 0;

  for (let i = 0; i < circularArray.length - 1; i++) {
    const maximumAbsoluteDifference = Math.abs(nums[i], nusm[i + 1]);
    if (maximumAbsoluteDifference > result) {
      result = maximumAbsoluteDifference;
    }
  }

  return result;
};
