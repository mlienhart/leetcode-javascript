/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
    if (arr[i] < arr[i + 1]) {
      a++;
    }
    if (arr[i] > arr[i + 1]) {
      b++;
      let c = arr.slice(i);
      for (let i = 0; i < c.length; i++) {
        if (c[i] <= c[i + 1]) {
          return false;
        }
      }
    }
  }

  return !!(a && b);
};
