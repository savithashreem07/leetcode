/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numMap = new Map()

    for(let i=0; i<nums.length; i++) {
        if (numMap.has(nums[i])) {
            if (i - numMap.get(nums[i]) <= k) return true
        }

        numMap.set(nums[i], i)
    }

    return false
};
