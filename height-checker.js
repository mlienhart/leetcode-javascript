/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let a = [...heights];
    heights.sort((a, b) => a < b ? -1 : 1);
    let b = 0;

    for (i = 0; i < heights.length; i++) {
        if (a[i] !== heights[i]) {
            b++;
        }
    }

    return b;
};