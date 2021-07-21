/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let a = (b) => {
        for (let i = 0; i < b.length; i++) {
            if (b[i] === 0) {
                b[i]++;
            }
            else {
                b[i]--;
            };
        }
        return b;
    };

    let b = image.map(x => x.reverse());

    return b.map(x => a(x));
};