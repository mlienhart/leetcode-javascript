/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  return Math.floor(
    (s.split("").filter((x) => x === letter).length * 100) / s.length
  );
};
