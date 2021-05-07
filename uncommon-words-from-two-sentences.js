/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let a = A.split(" ");
    let b = B.split(" ");
    let c = [];
    let map = new Map();

    for (i = 0; i < a.length; i++) {
        map.set(a[i], (map.get(a[i]) || 0) + 1);
    }

    for (i = 0; i < b.length; i++) {
        map.set(b[i], (map.get(b[i]) || 0) + 1);
    }

    for ([key, value] of map.entries()) {
        if (value === 1) {
            c.push(key);
        }
    }

    return c;
};