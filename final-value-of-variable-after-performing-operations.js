/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let a = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      a++;
    }
    if (operations[i] === "--X" || operations[i] === "X--") {
      a--;
    }
  }

  return a;
};
