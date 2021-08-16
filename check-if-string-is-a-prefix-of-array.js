/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let a = [];

  for (let i = 0; i < words.length; i++) {
    a.push(words[i]);
    if (a.join("") === s) {
      return true;
    }
  }

  return false;
};
