/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let current_end = 0
    let position = 0
    let jumps = 0

    for (i=0; i < nums.length - 1; i++) {
        if (position < i + nums[i]) {
            position = i + nums[i] 
        }

        if (i == current_end) {
            current_end = position
            jumps++
        }
    }

    return jumps
};
