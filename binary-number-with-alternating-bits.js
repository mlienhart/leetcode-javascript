/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const a = n.toString(2);

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1]) {
      return false;
    }
  }

  return true;
};
