/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let a = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (a.has(arr[i] * 2) || a.has(arr[i] / 2)) {
      return true;
    }
    a.add(arr[i]);
  }

  return false;
};
