/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      result = i + 1;
    }
  }

  return result;
};
