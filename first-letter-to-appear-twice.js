/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();

  for (const character of s) {
    if (!set.has(character)) {
      set.add(character);
    } else {
      return character;
    }
  }
};
