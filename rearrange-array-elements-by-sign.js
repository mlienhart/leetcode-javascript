/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const positiveNumbers = nums.filter((x) => x > 0);
  const negativeNumbers = nums.filter((x) => x < 0);
  const result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(positiveNumbers[i], negativeNumbers[i]);
  }

  return result;
};
