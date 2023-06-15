/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const result = [];

  for (let i = 0; i < strs.sort((a, b) => a - b)[0].length; i++) {
    if (strs.every((x) => x[i] === strs[0][i]) && i === result.length) {
      result.push(strs[0][i]);
    }
  }

  return result.length ? result.join("") : "";
};
