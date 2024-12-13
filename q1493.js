/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let array = []
    let maxi = 0
    let ones = 0

    for (let i=0; i<nums.length; i++) {
        if (nums[i] == 0) {
            array.push(ones)
            ones = 0
        }

        if (nums[i]==1) {
            ones++
        }
    }

    array.push(ones)

    if (array.length == 1) return Math.max(array[0]-1, 0)

    for (i=1; i<array.length; i++) {
        maxi = Math.max(maxi, array[i-1] + array[i])
    }

    return maxi
};
