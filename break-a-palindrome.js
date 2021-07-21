/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
    let a = palindrome.split("");

    for (let i = 0; i < Math.floor(a.length / 2); i++) {
        if (a[i] !== "a") {
            a[i] = "a";
            return a.join("");
        }
    }

    if (a.length === 1) {
        return "";
    }
    else {
        a[a.length - 1] = "b";
        return a.join("");
    }
};