/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const firstResult = [nums[0]];
  const secondResult = [nums[1]];

  for (let i = 2; i < nums.length; i++) {
    if (
      firstResult[firstResult.length - 1] >
      secondResult[secondResult.length - 1]
    ) {
      firstResult.push(nums[i]);
    } else {
      secondResult.push(nums[i]);
    }
  }

  return [...firstResult, ...secondResult];
};
