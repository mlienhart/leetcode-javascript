/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  return date2 > date1
    ? (new Date(date2) - new Date(date1)) / (24 * 60 * 60 * 1000)
    : (new Date(date1) - new Date(date2)) / (24 * 60 * 60 * 1000);
};
