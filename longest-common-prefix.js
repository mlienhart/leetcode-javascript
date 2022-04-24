/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let a = [];
  let b = strs.map((x) => x).sort((a, b) => a - b);

  for (let i = 0; i < b[0].length; i++) {
    if (strs.every((x) => x[i] === strs[0][i]) && i === a.length) {
      a.push(strs[0][i]);
    }
  }

  return a.length ? a.join("") : "";
};
