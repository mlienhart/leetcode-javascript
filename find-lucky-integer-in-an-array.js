/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let a = [];
  let b = new Map();

  for (let i = 0; i < arr.length; i++) {
    b.set(arr[i], (b.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of b.entries()) {
    if (key === value) {
      a.push(value);
    }
  }

  return a.length > 0 ? Math.max(...a) : -1;
};
