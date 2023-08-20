/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const result = {};

  for (const [b, c] of [...items1, ...items2]) {
    result[b] = result[b] ? result[b] + c : c;
  }

  return Object.entries(result);
};
