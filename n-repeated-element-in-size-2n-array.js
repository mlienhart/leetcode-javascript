/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  const result = new Set();

  for (let i = 0; i < A.length; i++) {
    if (result.has(A[i])) {
      return A[i];
    } else {
      result.add(A[i]);
    }
  }
};
