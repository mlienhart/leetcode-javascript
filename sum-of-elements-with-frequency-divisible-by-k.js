/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
  let result = {};

  for (const number of nums) {
    result[number] = result[number] ? result[number] + 1 : 1;
  }

  result = Object.entries(result)
    .filter((x) => x[1] % k === 0)
    .map((x) => [+x[0] * +x[1]])
    .flat();

  return result.length ? result.reduce((a, b) => a + b) : 0;
};
