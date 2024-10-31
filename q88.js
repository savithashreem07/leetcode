/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let m1 = m-1
    let n1 = n-1
    let index = m+n-1
    while (n1 >= 0) {
        if (m1 >=0 && nums2[n1] < nums1[m1]) {
            nums1[index] = nums1[m1]
            m1--
        } else {
            nums1[index] = nums2[n1]
            n1--
        }
        index--
    }

    return nums1
};
