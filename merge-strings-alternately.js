/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let a = [];

  for (i = 0; i < 100; i++) {
    a.push(word1[i]), a.push(word2[i]);
  }

  return a.join("");
};
