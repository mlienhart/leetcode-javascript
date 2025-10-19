/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let result = {};

  for (const word of words) {
    result[word] = result[word] ? result[word] + 1 : 1;
  }

  result = Object.entries(result).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0] ? 1 : -1;
    }

    return a[1] < b[1] ? 1 : -1;
  });

  return result.slice(0, k).map((x) => x[0]);
};
