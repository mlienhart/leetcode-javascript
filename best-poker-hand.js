/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every((x) => x === suits[0])) {
    return "Flush";
  }

  if (
    ranks.filter((x) => x === ranks[0]).length > 2 ||
    ranks.filter((x) => x === ranks[1]).length > 2 ||
    ranks.filter((x) => x === ranks[2]).length > 2
  ) {
    return "Three of a Kind";
  }

  if (new Set(ranks).size !== ranks.length) {
    return "Pair";
  }

  return "High Card";
};
