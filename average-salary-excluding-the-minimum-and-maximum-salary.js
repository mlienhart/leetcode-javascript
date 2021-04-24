/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let a = Math.max(...salary);
    let b = Math.min(...salary);
    let c = salary.reduce((a, b) => a + b, 0) - a - b;

    return c / (salary.length - 2);
};