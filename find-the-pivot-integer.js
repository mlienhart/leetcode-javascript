/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  for (let i = 0; i < result.length; i++) {
    if (
      result.slice(0, i).reduce((a, b) => a + b, 0) ===
      result.slice(i - 1).reduce((a, b) => a + b, 0)
    ) {
      return i;
    }
  }

  return n === 1 ? 1 : -1;
};
