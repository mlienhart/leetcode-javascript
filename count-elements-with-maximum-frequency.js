/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const result = {};

  for (const number of nums) {
    result[number] = result[number] ? result[number] + 1 : 1;
  }

  return Object.values(result)
    .filter((x) => x === Math.max(...Object.values(result)))
    .reduce((a, b) => a + b);
};
