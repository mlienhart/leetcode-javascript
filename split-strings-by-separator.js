/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  return words
    .map((x) => x.split(separator))
    .flat()
    .filter(Boolean);
};
