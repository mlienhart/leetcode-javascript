/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;

  for (const operation of operations) {
    operation.includes("+") ? result++ : result--;
  }

  return result;
};
