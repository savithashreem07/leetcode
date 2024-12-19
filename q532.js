/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let freqMap = new Map()
    let count = 0

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }

    for (let [num, freq] of freqMap) {
        if (k == 0) {
            if (freq > 1) count++
        } else {
            if (freqMap.has(num + k)) count++
        }
    }

    return count
};
