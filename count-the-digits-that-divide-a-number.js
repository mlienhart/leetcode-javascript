/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const a = num
    .toString()
    .split("")
    .map((x) => +x);
  let b = 0;

  for (const c of a) {
    if (num % c === 0) {
      b++;
    }
  }

  return b;
};