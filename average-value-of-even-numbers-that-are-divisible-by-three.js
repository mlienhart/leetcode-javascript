/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  const numbers = nums.filter((x) => x % 6 === 0);

  return numbers.length
    ? Math.floor(numbers.reduce((a, b) => a + b) / numbers.length)
    : 0;
};
