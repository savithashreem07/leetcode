/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length) return 0

    let island = 0
    let row = grid.length
    let column = grid[0].length

    const dfs = function (i, j) {
        if (i<0 || j<0 || i>=row || j>=column || grid[i][j] == '0') return

        grid[i][j] = '0'

        dfs(i-1, j)
        dfs(i+1, j)
        dfs(i, j-1)
        dfs(i, j+1)
    }

    for (let i=0; i<row; i++) {
        for (let j=0; j<column; j++) {
            if (grid[i][j] == '1') {
                island++
                dfs(i, j)
            }
        }
    }

    return island
};
