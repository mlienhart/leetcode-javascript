/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let a = 0;

    for (i = 0; i < accounts.length; i++) {
        let b = accounts[i].reduce((a, b) => a + b, 0);
        if (b > a) {
            a = b;
        }
    }

    return a;
};