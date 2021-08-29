/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();
  let a = [];

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for ([key, value] of map.entries()) {
    if (key === value) {
      a.push(value);
    }
  }

  return a.length > 0 ? Math.max(...a) : -1;
};
