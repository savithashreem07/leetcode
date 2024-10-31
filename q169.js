/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0
    let majority = 0

    for (i=0; i<nums.length; i++) {
        if (count == 0) {
            majority = nums[i]
        }
        if (nums[i] == majority) {
            count++
        } else {
            count--
        }
    }

    return majority
};
