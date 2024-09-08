/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  return (
    (+date.split("-")[0]).toString(2) +
    "-" +
    (+date.split("-")[1]).toString(2) +
    "-" +
    (+date.split("-")[2]).toString(2)
  );
};
