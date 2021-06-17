/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] < b[0] ? -1 : 1);
    let b = 0;

    for (i = 1; i < points.length; i++) {
        b = Math.max(b, points[i][0] - points[i - 1][0]);
    }

    return b;
};