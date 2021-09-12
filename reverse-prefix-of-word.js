/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let a = word.indexOf(ch);
  let b = word.slice(0, a + 1);
  let c = b.split("").reverse().join("");
  let d = word.slice(a + 1);

  return c + d;
};
