/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const firstList = [];
  const secondList = [];

  for (const number of nums) {
    if (!firstList.includes(number)) {
      firstList.push(number);
    } else if (!secondList.includes(number)) {
      secondList.push(number);
    } else return false;
  }

  return true;
};
