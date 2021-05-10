/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let a = Math.max(...candies);
    let b = [];

    for (i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= a) {
            b.push(true);
        }
        else { b.push(false); }
    }

    return b;
};