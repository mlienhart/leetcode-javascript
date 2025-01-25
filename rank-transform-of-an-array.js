/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortedUniqueList = [...new Set([...arr].sort((a, b) => a - b))];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(sortedUniqueList.indexOf(arr[i]) + 1);
  }

  return result;
};
