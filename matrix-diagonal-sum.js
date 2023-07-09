/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const result = [];

  for (let i = 0; i < mat.length; i++) {
    result.push(mat[i][i]);
  }

  mat.reverse();

  if (mat.length % 2 === 0) {
    for (let i = 0; i < mat.length; i++) {
      result.push(mat[i][i]);
    }
  } else {
    for (let i = 0; i < mat.length; i++) {
      if (i !== Math.floor(mat.length / 2)) {
        result.push(mat[i][i]);
      }
    }
  }

  return result.reduce((a, b) => a + b, 0);
};
