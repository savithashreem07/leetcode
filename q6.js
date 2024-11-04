/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s

    let result = new Array(numRows).fill('')
    let currentRow = 0
    let isDown = false

    for (i=0; i<s.length; i++) {
        result[currentRow] += s[i]

        if (currentRow == 0 || currentRow == numRows - 1) {
            isDown = !isDown
        }

        if (isDown) {
            currentRow += 1
        } else {
            currentRow -= 1
        }
    }

    return result.join('')
};
