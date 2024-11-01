/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let position = 0

    for (i=0; i<nums.length; i++) {
        if (position < i) {
            return false
        }
        if (position < i + nums[i]) {
            position = i + nums[i]
        }
    }

    return true
};
