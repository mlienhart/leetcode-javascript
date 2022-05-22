/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let a = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      a++;
    }
  }

  return Math.floor((a * 100) / s.length);
};
