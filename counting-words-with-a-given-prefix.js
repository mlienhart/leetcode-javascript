/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.filter((x) => x.startsWith(pref)).length;
};
