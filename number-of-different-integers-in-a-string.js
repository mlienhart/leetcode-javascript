/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  return new Set(
    word
      .split(/[a-z]+/)
      .filter(Boolean)
      .map(BigInt)
  ).size;
};
