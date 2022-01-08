/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let a = [];

  for (let i = 1; i <= 10000; i++) {
    if (!arr.includes(i)) {
      a.push(i);
    }
  }

  return a[k - 1];
};
