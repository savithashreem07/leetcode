/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let numMap = new Map()

    for (let i=0; i<arr.length; i++) {
        let rem = ((arr[i] % k) + k) % k
        numMap.set(rem, (numMap.get(rem) || 0) + 1)
    }

    for (let [num, freq] of numMap) {
        if (num == 0) {
            if (freq % 2 !== 0) return false
        } else {
            let comp = (k - num) % k

            if (numMap.get(comp) !== freq) return false
        }
    }

    return true

};
