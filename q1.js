/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sumMap = new Map()

    for (i=0; i<nums.length; i++) {
        let comp = target - nums[i]
        if (sumMap.has(comp)) {
            return [i, sumMap.get(comp)]
        }

        sumMap.set(nums[i], i)
    }
};
