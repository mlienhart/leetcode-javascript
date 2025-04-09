/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  ransomNote = ransomNote.split("");
  magazine = magazine.split("");
  let result = 0;

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote[i])) {
      result++;
      magazine.splice(magazine.indexOf(ransomNote[i]), 1);
    }
  }

  return result === ransomNote.length;
};
