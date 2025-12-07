/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const counts = {};

  for (const number of nums) {
    counts[number] = counts[number] ? counts[number] + 1 : 1;
  }

  const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const mostFrequentEvenNumber = +sortedEntries.find(
    (x) => x[0] % 2 === 0
  )?.[0];

  return mostFrequentEvenNumber || mostFrequentEvenNumber === 0
    ? mostFrequentEvenNumber
    : -1;
};
