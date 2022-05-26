/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let x of strs) {
    let a = x
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");
    if (!map.get(a)) {
      map.set(a, []);
    }
    map.get(a).push(x);
  }

  return [...map.values()];
};
