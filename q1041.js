/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    let dir = 0
    let x = 0
    let y = 0

    for (let instruction of instructions) {
        if (instruction == 'G') {
            x += directions[dir][0]
            y += directions[dir][1]
        } else if (instruction == 'L') {
            dir = (dir + 3) % 4
        } else if (instruction == 'R') {
            dir = (dir + 1) % 4
        }
    }

    return (x == 0 && y == 0) || dir !== 0

};
