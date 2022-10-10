/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let a = 1;
  let b = 1;

  for (let i = 1; i < s.length; i++) {
    s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 ? a++ : (a = 1);
    b = Math.max(a, b);
  }

  return b;
};
