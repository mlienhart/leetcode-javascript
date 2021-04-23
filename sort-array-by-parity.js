/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let a = A.filter(x => x % 2 === 0);
    let b = A.filter(x => x % 2 !== 0);

    return [...a, ...b];
};