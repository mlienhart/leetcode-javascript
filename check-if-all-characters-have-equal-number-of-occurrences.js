/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const a = {};

  for (const b of s) {
    a[b] = a[b] ? a[b] + 1 : 1;
  }

  return new Set(Object.values(a)).size === 1;
};
