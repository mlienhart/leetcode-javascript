/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let a = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      a = i + 1;
    }
  }

  return a;
};
