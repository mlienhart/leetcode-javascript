/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const firstWordsCounts = new Map();
  const secondWordsCounts = new Map();
  let result = 0;

  for (let i = 0; i < words1.length; i++) {
    firstWordsCounts.set(words1[i], (firstWordsCounts.get(words1[i]) || 0) + 1);
  }

  for (let i = 0; i < words2.length; i++) {
    secondWordsCounts.set(
      words2[i],
      (secondWordsCounts.get(words2[i]) || 0) + 1
    );
  }

  for (const word of words1) {
    if (firstWordsCounts.get(word) === 1 && secondWordsCounts.get(word) === 1) {
      result++;
    }
  }

  return result;
};
