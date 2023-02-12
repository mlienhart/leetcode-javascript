/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let result = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      result++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      result--;
    }
  }

  return result === 0;
};
