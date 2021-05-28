/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let a = s.split(" ");
    let b = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] !== "") { b.push(a[i]); }
    }

    return b.length;
};