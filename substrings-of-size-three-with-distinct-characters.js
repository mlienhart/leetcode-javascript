/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  const substringsList = [];
  let result = 0;

  for (let i = 0; i < s.length - 2; i++) {
    substringsList.push(s[i] + s[i + 1] + s[i + 2]);
  }

  for (let i = 0; i < substringsList.length; i++) {
    if (new Set(substringsList[i]).size === 3) {
      result++;
    }
  }

  return result;
};
