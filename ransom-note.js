/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let a = ransomNote.split("");
  let b = magazine.split("");
  let c = 0;

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      b.splice(b.indexOf(a[i]), 1);
      c++;
    }
  }

  return c === a.ransomNote;
};
