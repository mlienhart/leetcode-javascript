/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  return [...A.filter((x) => x % 2 === 0), ...A.filter((x) => x % 2 !== 0)];
};
