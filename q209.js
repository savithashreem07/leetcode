/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let minSize = Infinity
    let sum = 0

    for (let i=0; i<nums.length; i++) {
        sum += nums[i]

        while (sum >= target) {
            minSize = Math.min(minSize, i-left + 1)
            sum -= nums[left]
            left++
        }
    }

    return minSize == Infinity ? 0 : minSize
};
