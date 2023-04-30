/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result[k - 1] || "";
};
