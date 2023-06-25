/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  for (let i = 1; i < s.length; i++) {
    if (s.slice(i) === s.slice(0, s.length - i)) {
      return s.slice(i);
    }
  }

  return "";
};
