/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const sortedList = text
    .toLowerCase()
    .split(" ")
    .sort((a, b) => a.length - b.length);
  const firstWord = sortedList[0][0].toUpperCase() + sortedList[0].slice(1);

  return firstWord + " " + sortedList.slice(1).join(" ");
};
