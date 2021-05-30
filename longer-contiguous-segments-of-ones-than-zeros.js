/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let a = s.split("0").sort((a, b) => a > b ? -1 : 1);
    let b = s.split("1").sort((a, b) => a > b ? -1 : 1);

    return a[0].length > b[0].length;
};