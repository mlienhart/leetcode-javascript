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

  if (valuesListWithoutDuplicate[0] !== 1) {
    result[1] = 1;
    return result;
  }

  if (
    valuesListWithoutDuplicate[valuesListWithoutDuplicate.length - 1] !==
    valuesListWithDuplicate.length
  ) {
    result[1] = valuesListWithDuplicate.length;
    return result;
  }

  for (let i = 0; i < valuesListWithoutDuplicate.length; i++) {
    if (
      valuesListWithoutDuplicate[i] + 2 ===
      valuesListWithoutDuplicate[i + 1]
    ) {
      result[1] = valuesListWithoutDuplicate[i] + 1;
      return result;
    }
  }

  return result;
};
