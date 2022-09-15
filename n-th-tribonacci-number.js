/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const a = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    a.push(a[i - 1] + a[i - 2] + a[i - 3]);
  }

  return a[n];
};
