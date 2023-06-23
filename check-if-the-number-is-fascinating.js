/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const result = `${n}${n * 2}${n * 3}`.split("");

  return (
    !result.includes("0") && result.length === 9 && new Set(result).size === 9
  );
};
