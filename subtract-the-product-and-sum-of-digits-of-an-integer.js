/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let a = Array.from(String(n), Number);
    let b = a.reduce((a, b) => a * b);
    let c = a.reduce((a, b) => a + b);

    return b - c;
};