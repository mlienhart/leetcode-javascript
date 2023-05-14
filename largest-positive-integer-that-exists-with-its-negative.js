/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let result = -1;

  for (const number of nums) {
    const negativeNumber = nums.find((x) => x === -number);
    if (negativeNumber > result) {
      result = negativeNumber;
    }
  }

  return result;
};
