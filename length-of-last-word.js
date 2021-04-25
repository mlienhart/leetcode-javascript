/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (!s) { return 0; }
    else { return s.trim().split(" ").reverse()[0].length; }
};