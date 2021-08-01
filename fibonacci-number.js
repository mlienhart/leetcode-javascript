/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = [0, 1];

  for (let i = 2; i <= n; i++) {
    a.push(a[i - 2] + a[i - 1]);
  }

  return a[n];
};
