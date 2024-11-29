/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from( {length: 9}, () => new Set())
    const columns = Array.from( {length: 9}, () => new Set())
    const boxes = Array.from( {length: 9}, () => new Set())

    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)
            const num = board[i][j]

            if (num == ".") continue

            if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
                return false
            }

            rows[i].add(num)
            columns[j].add(num)
            boxes[boxIndex].add(num)
        }
    }

    return true
};
