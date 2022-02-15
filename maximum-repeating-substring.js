/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let a = 0;
  let b = word;

  while (sequence.includes(b)) {
    a++;
    b = b + word;
  }

  return a;
};
