/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function (values) {
  const flatSortedList = values.flat().sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < flatSortedList.length; i++) {
    result = result + flatSortedList[i] * (i + 1);
  }

  return result;
};
