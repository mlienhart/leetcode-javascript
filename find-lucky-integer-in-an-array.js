/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const result = [];
  const counts = new Map();

  for (let i = 0; i < arr.length; i++) {
    counts.set(arr[i], (counts.get(arr[i]) || 0) + 1);
  }

  for (const [key, value] of counts.entries()) {
    if (key === value) {
      result.push(value);
    }
  }

  return result.length > 0 ? Math.max(...result) : -1;
};
