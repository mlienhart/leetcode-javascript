/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let a = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      let b = arr.slice(i, j);
      let c = b.reduce((a, b) => a + b, 0);
      if (b.length % 2 !== 0) {
        a.push(c);
      }
    }
  }

  return a.reduce((a, b) => a + b, 0);
};
