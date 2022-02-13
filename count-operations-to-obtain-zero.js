/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  a = 0;

  if (num1 === 0 || num2 === 0) {
    return a;
  }

  while (num1 > 0 || num1 > 0) {
    num1 >= num2 ? (num1 -= num2) : (num2 -= num1);
    a++;
  }

  return a;
};
