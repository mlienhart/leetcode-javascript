/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let result = 0;
  points.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  for (let i = 1; i < points.length; i++) {
    result = Math.max(result, points[i][0] - points[i - 1][0]);
  }

  return result;
};
