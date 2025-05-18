/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let result = 1;

  while (num > 0) {
    num = num - result;
    result = result + 2;
  }

  return num === 0;
};
