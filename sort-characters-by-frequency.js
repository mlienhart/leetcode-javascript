/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let a = s.split("");
    let map = new Map();
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        map.set(a[i], (map.get(a[i]) || 0) + 1);
    }

    for (let [key, value] of map.entries()) {
        arr.push({ key: key, value: value });
    }

    let b = arr.sort((a, b) => a.value > b.value ? -1 : 1);

    return b.map(x => x.key.repeat(x.value)).join("");
};