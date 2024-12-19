/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currSum = 0

    for (let num of nums) {
        currSum = Math.max(num, currSum + num)
        maxSum = Math.max(maxSum, currSum)
    }

    return maxSum
};
