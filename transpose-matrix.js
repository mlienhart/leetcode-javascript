/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] = result[j] || [];
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};
