/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let a = 1;
  let b = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      b++;
      a = Math.max(a, b);
    } else {
      b = 1;
    }
  }

  return a;
};
