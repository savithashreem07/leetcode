/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let row = matrix.length

    for (let i=0; i<row; i++) {
        for (j=i+1; j<row; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i=0; i<row; i++) {
        matrix[i].reverse()
    }

    return matrix
};
