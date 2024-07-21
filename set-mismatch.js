/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const uniqueValuesList = [...new Set([...nums])];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      result.push(nums[i]);
    }
  }

  if (uniqueValuesList[0] !== 1) {
    result.push(1);
    return result;
  }

  for (let i = 0; i < uniqueValuesList.length; i++) {
    if (uniqueValuesList[i] + 1 !== uniqueValuesList[i + 1]) {
      result.push(uniqueValuesList[i] + 1);
      return result;
    }
  }

  return result;
};
