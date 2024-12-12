/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occMap = new Map()

    for (let i=0; i<arr.length; i++) {
        occMap.set(arr[i], (occMap.get(arr[i]) || 0) + 1)
    }

    let occSet = new Set(occMap.values())

    return occSet.size == occMap.size

};
