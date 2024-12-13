/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let left = 0
    let maxOnes = 0
    let zeros = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) zeros++

        while (zeros > k) {
            if (nums[left] == 0) {
                zeros--
            }
            left++
        }

        maxOnes = Math.max(maxOnes, right-left+1)
    }

    return maxOnes
};
