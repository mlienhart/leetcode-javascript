/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let a = num;
  let b = 0;

  for (let i = 0; i < num; i++) {
    if (a === 0) {
      return b;
    }
    if (a % 2 === 0) {
      a /= 2;
      b++;
    }
    if (a % 2 !== 0) {
      a -= 1;
      b++;
    }
  }

  return b;
};
