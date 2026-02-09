/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function (n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    if (new Set(i.toString(2)).size === 1) {
      result++;
    }
  }

  return result;
};
