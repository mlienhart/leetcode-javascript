/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let a = 2;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      a++;
    }
  }

  return a === 3;
};
