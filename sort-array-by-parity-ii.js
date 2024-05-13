/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const evenNumbers = nums.filter((x) => x % 2 === 0);
  const oddNumbers = nums.filter((x) => x % 2 !== 0);
  const result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(evenNumbers[i]);
    result.push(oddNumbers[i]);
  }

  return result;
};
