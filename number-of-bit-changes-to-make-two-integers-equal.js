/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  let binaryRepresentationOfN = n.toString(2);
  let binaryRepresentationOfK = k.toString(2);
  let result = 0;
  const maximumLength = Math.max(
    binaryRepresentationOfN.length,
    binaryRepresentationOfK.length
  );
  binaryRepresentationOfN = binaryRepresentationOfN.padStart(
    maximumLength,
    "0"
  );
  binaryRepresentationOfK = binaryRepresentationOfK.padStart(
    maximumLength,
    "0"
  );

  for (let i = 0; i < binaryRepresentationOfN.length; i++) {
    if (
      binaryRepresentationOfN[i] === "1" &&
      binaryRepresentationOfK[i] === "0"
    ) {
      result++;
    }
    if (
      binaryRepresentationOfN[i] === "0" &&
      binaryRepresentationOfK[i] === "1"
    ) {
      return -1;
    }
  }

  return result;
};
