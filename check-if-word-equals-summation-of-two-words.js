/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    let a = firstWord.split("");
    let b = secondWord.split("");
    let c = targetWord.split("");
    let d = {
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        e: "4",
        f: "5",
        g: "6",
        h: "7",
        i: "8",
        j: "9",
    };
    let e = [];
    let f = [];
    let g = [];

    for (i = 0; i < a.length; i++) {
        e.push(d[a[i]]);
    }

    for (i = 0; i < b.length; i++) {
        f.push(d[b[i]]);
    }

    for (i = 0; i < c.length; i++) {
        g.push(d[c[i]]);
    }

    return +e.join("") + +f.join("") === +g.join("");
};