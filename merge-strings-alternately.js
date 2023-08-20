/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const result = [];

  for (i = 0; i < 100; i++) {
    result.push(word1[i]), result.push(word2[i]);
  }

  return result.join("");
};
