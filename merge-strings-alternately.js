/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let a = word1.split("");
  let b = word2.split("");
  let arr = [];

  for (let i = 0; i <= 100; i++) {
    arr.push(a[i]);
    arr.push(b[i]);
  }

  return arr.join("");
};
