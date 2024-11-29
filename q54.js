/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const result = []

    let top = 0
    let left = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1

    while (top <= bottom && left <= right) {
        for (let i=left; i<=right; i++) {
            result.push(matrix[top][i])
        }
        top++

        for (let j=top; j<=bottom; j++) {
            result.push(matrix[j][right])
        }
        right--

        if (top <= bottom) {
            for (let k=right; k >= left; k--) {
                result.push(matrix[bottom][k])
            }
            bottom--
        }

        if (left <= right) {
            for (let l=bottom; l>=top; l--) {
                result.push(matrix[l][left])
            }
            left++
        }
    }
    
    return result
};
