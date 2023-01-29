/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    let sum = i
      .toString()
      .split("")
      .reduce((a, b) => +a + +b);
    if (sum % 2 === 0) {
      result++;
    }
  }

  return result;
};
