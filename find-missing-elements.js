/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  const lowestNumber = Math.min(...nums);
  const highestNumber = Math.max(...nums);
  const result = [];

  for (let i = lowestNumber; i < highestNumber; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
};
