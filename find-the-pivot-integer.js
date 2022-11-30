/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let a = [];

  for (let i = 1; i <= n; i++) {
    a.push(i);
  }

  for (let i = 0; i < a.length; i++) {
    if (
      a.slice(0, i).reduce((a, b) => a + b, 0) ===
      a.slice(i - 1).reduce((a, b) => a + b, 0)
    ) {
      return i;
    }
  }

  return n === 1 ? 1 : -1;
};
