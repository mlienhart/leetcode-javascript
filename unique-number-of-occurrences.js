/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map();
    let a = [];

    for (i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    for (x of map.values()) {
        a.push(x);
    }

    if (a.length === [... new Set(a)].length) {
        return true;
    }

    return false;
};
