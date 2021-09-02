/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let a = [];
  let b = new Map();

  for (let i = 0; i < arr.length; i++) {
    b.set(arr[i], (b.get(arr[i]) || 0) + 1);
  }

  for (let x of b.values()) {
    a.push(x);
  }

  if (a.length === [...new Set(a)].length) {
    return true;
  }

  return false;
};
