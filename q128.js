/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums)
    let maxLen = 0

    for (let i=0; i<nums.length; i++) {
        if (!numSet.has(nums[i] - 1)) {
            let currNum = nums[i]
            let currLen = 1

            while (numSet.has(currNum + 1)) {
                currNum++
                currLen++
            }

            maxLen = Math.max(maxLen, currLen)
        }
    }

    return maxLen
};
