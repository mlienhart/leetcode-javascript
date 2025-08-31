/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
  let evenNumbersSum = 0;
  let oddNumbersSum = 0;

  for (let i = 1; i <= 2 * n; i++) {
    i % 2 === 0 ? (evenNumbersSum += i) : (oddNumbersSum += i);
  }

  function findGreatestCommonDivisor(firstNumber, secondNumber) {
    while (secondNumber !== 0) {
      let remainder = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = remainder;
    }
    return firstNumber;
  }

  return findGreatestCommonDivisor(evenNumbersSum, oddNumbersSum);
};
