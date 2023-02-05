/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.filter((x) =>
    x.split("").every((x) => allowed.split("").includes(x))
  ).length;
};
