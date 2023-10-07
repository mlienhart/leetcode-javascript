/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  const targetStringValue = `${BigInt(target)}`;
  let result = 0;

  if (targetStringValue === "0") {
    return 0;
  }

  for (let i = 0; i < targetStringValue.length; i++) {
    if (targetStringValue[i] !== targetStringValue[i + 1]) {
      result++;
    }
  }

  return result;
};
