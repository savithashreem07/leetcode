/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''

    strs.sort()

    let first = strs[0]
    let last = strs[strs.length - 1]

    let prefix = ''
    let i =0

    while (i < first.length && i < last.length && first[i] === last[i]) {
        prefix += first[i]
        i++
    }

    return prefix
};
