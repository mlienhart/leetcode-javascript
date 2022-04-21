/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let a = new Map();

  for (let i = 0; i < words.length; i++) {
    a.set(words[i], (a.get(words[i]) || 0) + 1);
  }

  let b = [...new Map(a)];

  b.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0] ? 1 : -1;
    }

    return a[1] < b[1] ? 1 : -1;
  });

  return b.slice(0, k).map((x) => x[0]);
};
