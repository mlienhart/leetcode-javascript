/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  for (let i = 1; i < s.length; i++) {
    let b = s.slice(i);
    let c = s.slice(0, s.length - i);
    if (b === c) {
      return b;
    }
  }

  return "";
};
