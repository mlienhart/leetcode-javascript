/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
  const result = {};

  for (const number of nums) {
    result[number] = result[number] ? result[number] + 1 : 1;
  }

  for (const number of nums) {
    if (number % 2 === 0 && result[number] === 1) {
      return number;
    }
  }

  return -1;
};
