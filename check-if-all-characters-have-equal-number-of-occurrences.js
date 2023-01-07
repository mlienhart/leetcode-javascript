/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const counts = {};

  for (const character of s) {
    counts[character] = counts[character] ? counts[character] + 1 : 1;
  }

  return new Set(Object.values(counts)).size === 1;
};
