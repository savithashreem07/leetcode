/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    if (!matrix.length || !matrix[0].length) return false

    const m = matrix.length
    const n = matrix[0].length
    let low = 0
    let high = m * n - 1

    while (low <= high) {
        let mid = Math.floor((high + low) / 2)
        let row = Math.floor (mid / n)
        let col = mid % n
        let midVal = matrix[row][col]
        if (midVal == target) {
            return true
        } else if (midVal > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return false
};
