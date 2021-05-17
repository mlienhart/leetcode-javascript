/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let a = s.split(" ");

    return a.map(x => x.split("").reverse().join("")).join(" ");
};