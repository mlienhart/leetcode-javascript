/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  let a = 0;

  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      let b =
        grid[i][j] +
        grid[i][j + 1] +
        grid[i][j + 2] +
        grid[i + 1][j + 1] +
        grid[i + 2][j] +
        grid[i + 2][j + 1] +
        grid[i + 2][j + 2];
      if (b > a) {
        a = b;
      }
    }
  }

  return a;
};
