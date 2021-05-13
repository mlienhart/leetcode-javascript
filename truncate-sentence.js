/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let a = s.split(" ");
    let arr = [];

    for (i = 0; i < a.length; i++) {
        if (i < k) {
            arr.push(a[i]);
        }
    }

    return arr.join(" ");
};