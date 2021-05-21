/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let a = moves.split("");
    let b = 0;
    let c = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] === 'U') {
            b++;
        }
        if (a[i] === 'D') {
            b--;
        }
        if (a[i] === 'R') {
            c++;
        }
        if (a[i] === 'L') {
            c--;
        }
    }

    return b === 0 && c === 0;
};