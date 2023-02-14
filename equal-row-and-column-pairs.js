/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const transposedMatrix = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (!transposedMatrix[i]) {
        transposedMatrix.push([]);
      }
      transposedMatrix[i].push(grid[j][i]);
    }
  }

  const originalMappedMatrix = grid.map((x) => x.join("-"));
  const transposedMappedMatrix = transposedMatrix.map((x) => x.join("-"));
  let result = 0;

  for (let i = 0; i < originalMappedMatrix.length; i++) {
    for (let j = 0; j < transposedMappedMatrix.length; j++) {
      if (originalMappedMatrix[i] === transposedMappedMatrix[j]) {
        result++;
      }
    }
  }

  return result;
};
