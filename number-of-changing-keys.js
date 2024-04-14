/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let result = 0;
  s = s.toLowerCase();

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      result++;
    }
  }

  return result;
};
