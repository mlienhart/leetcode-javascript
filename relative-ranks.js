/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const result = [];
  const sortedList = score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    if (score[i] === sortedList[0]) {
      result.push({ medal: "Gold Medal" });
    } else if (score[i] === sortedList[1]) {
      result.push({ medal: "Silver Medal" });
    } else if (score[i] === sortedList[2]) {
      result.push({ medal: "Bronze Medal" });
    } else {
      result.push({ medal: `${sortedList.indexOf(score[i]) + 1}` });
    }
  }

  return result.map((x) => x.medal);
};
