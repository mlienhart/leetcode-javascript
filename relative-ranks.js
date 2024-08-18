/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const result = [];
  const sortedList = score.toSorted((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    if (score[i] === sortedList[0]) {
      result.push({ place: "Gold Medal" });
    } else if (score[i] === sortedList[1]) {
      result.push({ place: "Silver Medal" });
    } else if (score[i] === sortedList[2]) {
      result.push({ place: "Bronze Medal" });
    } else {
      result.push({ place: `${sortedList.indexOf(score[i]) + 1}` });
    }
  }

  return result.map((x) => x.place);
};
