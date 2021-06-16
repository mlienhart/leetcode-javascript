/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    let a = words.join("");
    let b = 0;
    let map = new Map();

    for (i = 0; i < a.length; i++) {
        map.set(a[i], (map.get(a[i]) || 0) + 1);
    }

    for ([key, value] of map.entries()) {
        if (value % words.length !== 0) {
            b++;
        }
    }

    return b < 1;
};