/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let a = 0;

  points.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  for (let i = 1; i < points.length; i++) {
    a = Math.max(a, points[i][0] - points[i - 1][0]);
  }

  return a;
};
