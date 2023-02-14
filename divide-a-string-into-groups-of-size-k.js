/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const characterList = s.split("");
  const result = [];

  for (let i = 0; i < s.length / k; i++) {
    result.push(characterList.splice(0, k));
  }

  const lastResult = result.pop();

  for (let i = lastResult.length; i < k; i++) {
    lastResult.push(fill);
  }

  return [...result.map((x) => x.join("")), lastResult.join("")];
};
