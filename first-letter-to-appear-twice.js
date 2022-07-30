/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const a = new Set();

  for (const b of s) {
    if (!a.has(b)) {
      a.add(b);
    } else {
      return b;
    }
  }
};
