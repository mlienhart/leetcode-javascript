/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const element of strs) {
    const sortedElement = element
      .split("")
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");
    if (!map.get(sortedElement)) {
      map.set(sortedElement, []);
    }
    map.get(sortedElement).push(element);
  }

  return [...map.values()];
};
