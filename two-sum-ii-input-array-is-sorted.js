/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let a = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        a.push(i + 1, j + 1);
      }
      if (a.length === 2) {
        return a;
      }
    }
  }

  return a;
};
