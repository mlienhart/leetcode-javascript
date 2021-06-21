/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let a = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let b = 0;

    for (i = 0; i < s.length / 2; i++) {
        if (a.includes(s[i])) {
            b++;
        }
    }

    for (i = s.length / 2; i < s.length; i++) {
        if (a.includes(s[i])) {
            b--;
        }
    }

    return b === 0;
};