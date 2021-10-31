/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let a = new Map();
  let b = [];

  for (let i = 0; i < arr.length; i++) {
    a.set(arr[i], (a.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of a.entries()) {
    if (value === 1) {
      b.push(key);
    }
  }

  return b[k - 1] || "";
};
