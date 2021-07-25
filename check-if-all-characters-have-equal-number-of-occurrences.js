/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = new Map();
  let a = [];

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for ([key, value] of map.entries()) {
    a.push(value);
  }

  let b = a[0];

  return a.every((x) => x === b);
};
