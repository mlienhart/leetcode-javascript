/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let a = coordinates.split("");
    let b = ['a', 'c', 'e', 'g'];

    if (b.includes(a[0]) && a[1] % 2 !== 0 || ((!b.includes(a[0]) && a[1] % 2 === 0))) {
        return false;
    }

    return true;
};