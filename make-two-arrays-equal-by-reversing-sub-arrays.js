/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    let a = target.sort().toString();
    let b = arr.sort().toString();

    return a === b;
};