/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const valuesListWithDuplicate = grid.flat().sort((a, b) => a - b);
  const valuesListWithoutDuplicate = [...new Set(valuesListWithDuplicate)];
  const result = [];

  for (let i = 0; i < valuesListWithDuplicate.length; i++) {
    if (valuesListWithDuplicate[i] === valuesListWithDuplicate[i + 1]) {
      result[0] = valuesListWithDuplicate[i];
    }
  }

  for (let i = 0; i < valuesListWithoutDuplicate.length; i++) {
    if (valuesListWithoutDuplicate[0] !== 1) {
      result[1] = 1;
    }
    if (
      valuesListWithoutDuplicate[i] + 2 ===
      valuesListWithoutDuplicate[i + 1]
    ) {
      result[1] = valuesListWithoutDuplicate[i] + 1;
    }
    if (i === valuesListWithoutDuplicate.length - 1 && !result[1]) {
      result[1] = valuesListWithoutDuplicate.length + 1;
    }
  }

  return result;
};
