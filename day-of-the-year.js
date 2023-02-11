/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  return (
    (new Date(date) - new Date(date.slice(0, 4))) / (1000 * 60 * 60 * 24) + 1
  );
};
