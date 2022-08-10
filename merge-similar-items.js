/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let a = {};

  for (const [b, c] of [...items1, ...items2]) {
    a[b] = a[b] ? a[b] + c : c;
  }

  return Object.entries(a);
};
