/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  let result = 0;

  while (num1 > 0 || num1 > 0) {
    num1 >= num2 ? (num1 -= num2) : (num2 -= num1);
    result++;
  }

  return result;
};
