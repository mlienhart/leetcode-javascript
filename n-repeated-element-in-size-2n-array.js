/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let a = new Set();

    for (i = 0; i < A.length; i++) {
        if (a.has(A[i])) { return A[i]; }
        else { a.add(A[i]); }
    }
};
