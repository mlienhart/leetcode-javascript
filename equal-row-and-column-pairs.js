/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const a = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (!a[i]) {
        a.push([]);
      }
      a[i].push(grid[j][i]);
    }
  }

  const b = grid.map((x) => x.join("-"));
  const c = a.map((x) => x.join("-"));
  let d = 0;

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < c.length; j++) {
      if (b[i] === c[j]) {
        d++;
      }
    }
  }

  return d;
};
