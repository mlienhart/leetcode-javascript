/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let a = [];

  for (let i = 0; i < mat.length; i++) {
    a.push(mat[i][i]);
  }

  mat.reverse();

  if (mat.length % 2 === 0) {
    for (let i = 0; i < mat.length; i++) {
      a.push(mat[i][i]);
    }
  }

  if (mat.length % 2 !== 0) {
    for (let i = 0; i < mat.length; i++) {
      if (i < Math.floor(mat.length / 2) || i > Math.floor(mat.length / 2)) {
        a.push(mat[i][i]);
      }
    }
  }

  return a.reduce((a, b) => a + b, 0);
};
