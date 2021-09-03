/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let a = [...new Set([...arr].sort((a, b) => a - b))];
  let b = [];

  for (let i = 0; i < arr.length; i++) {
    b.push(a.indexOf(arr[i]) + 1);
  }

  return b;
};
