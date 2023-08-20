/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let result = 0;
  let currentWord = word;

  while (sequence.includes(currentWord)) {
    result++;
    currentWord = currentWord + word;
  }

  return result;
};
