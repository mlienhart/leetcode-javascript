/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let a = 1;

  while (num > 0) {
    num = num - a;
    a = a + 2;
  }

  return num === 0;
};
