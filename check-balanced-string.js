/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let sumOfEvenValues = 0;
  let sumOfOddValues = 0;

  for (let i = 0; i < num.length; i++) {
    i % 2 === 0 ? (sumOfEvenValues += +num[i]) : (sumOfOddValues += +num[i]);
  }

  return sumOfEvenValues === sumOfOddValues;
};
