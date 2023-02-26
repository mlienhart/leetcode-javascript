/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const result = [];

  pref.forEach((x, i) => result.push(pref[i] ^ pref[i - 1]));

  return result;
};
