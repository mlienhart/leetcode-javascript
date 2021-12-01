/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
  let a = [];
  let b = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    b = Math.min(b, Math.abs(arr[i] - arr[i + 1]));
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) === b) {
      a.push([arr[i], arr[i + 1]]);
    }
  }

  return a;
};
