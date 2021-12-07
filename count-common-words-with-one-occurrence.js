/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  let a = new Map();
  let b = new Map();
  let c = 0;

  for (let i = 0; i < words1.length; i++) {
    a.set(words1[i], (a.get(words1[i]) || 0) + 1);
  }

  for (let i = 0; i < words2.length; i++) {
    b.set(words2[i], (b.get(words2[i]) || 0) + 1);
  }

  for (let x of words1) {
    if (a.get(x) === 1 && b.get(x) === 1) {
      c++;
    }
  }

  return c;
};
