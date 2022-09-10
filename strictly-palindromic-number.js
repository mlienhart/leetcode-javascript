/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    let a = n.toString(i);
    let b = a.split("").reverse().join("");

    if (a !== b) {
      return false;
    }
  }

  return true;
};
