/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    if (!matrix.length || !matrix[0].length) return
    const row = matrix[0].length
    const column = matrix.length

    let firstRowZero = false
    let firstColZero = false

    for (let i=0; i<row; i++) {
        if (matrix[0][i] == 0) {
            firstRowZero = true
            break
        }
    }

    for (let j=0; j<column; j++) {
        if (matrix[j][0] == 0) {
            firstColZero = true
            break
        }
    }

    for (let i=1; i<column; i++) {
        for (let j=1; j<row; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i=1; i<column; i++) {
        for (let j=1; j<row; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (firstRowZero) {
        for (let i=0; i<row; i++) {
            matrix[0][i] = 0
        }
    }

    if (firstColZero) {
        for (let j=0; j<column; j++) {
            matrix[j][0] = 0
        }
    }
};
