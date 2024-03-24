/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s.includes(s[i + 1] + s[i])) {
      return true;
    }
  }

  return false;
};
