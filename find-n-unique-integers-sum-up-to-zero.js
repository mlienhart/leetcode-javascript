/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let a = [];

  if (n % 2 !== 0) {
    a.push(0);
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    a.push(i + 1, -(i + 1));
  }

  return a;
};
