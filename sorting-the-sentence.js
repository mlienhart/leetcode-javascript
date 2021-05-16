/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let a = s.split(" ");
    let b = a.map(x => x.split("").reverse().join("")).sort();

    return b.map(x => x.split("").reverse().join("")).join(" ").replace(/[0-9]/g, '');
};