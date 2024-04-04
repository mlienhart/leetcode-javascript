/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const result = [];
  const flattenedMatrix = mat.flat();

  if (r * c !== flattenedMatrix.length) {
    return mat;
  }

  for (let i = 0; i < r; i++) {
    result.push(flattenedMatrix.splice(0, c));
  }

  return result;
};
