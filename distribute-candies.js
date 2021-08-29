/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let a = candyType.length / 2;
  let b = new Set(candyType).size;

  return a > b ? b : a;
};
