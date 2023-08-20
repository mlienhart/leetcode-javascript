/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const result = {};

  for (const [key, value] of [...items1, ...items2]) {
    result[key] = result[key] ? result[key] + value : value;
  }

  return Object.entries(result);
};
