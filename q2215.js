/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let new1 = new Set(nums1)
    let new2 = new Set(nums2)

    let result1 = [...new1].filter(val => !new2.has(val))
    let result2 = [...new2].filter(val => !new1.has(val))

    return [result1, result2]
};
