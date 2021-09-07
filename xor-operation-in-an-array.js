/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let a = 0;

  for (let i = 0; i < n; i++) {
    a = a ^ (start + 2 * i);
  }

  return a;
};
