/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  const result = n.toString(2).split("");

  for (let i = 0; i < result.length; i++) {
    result[i] === "1" ? (result[i] = "0") : (result[i] = "1");
  }

  return parseInt(result.join(""), 2);
};
