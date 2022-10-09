/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const a = [];

  pref.forEach((x, i) => a.push(pref[i] ^ pref[i - 1]));

  return a;
};
