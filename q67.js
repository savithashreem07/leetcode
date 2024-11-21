/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let result = []
    let carry = 0

    while (i>=0 || j>=0 || carry>0) {
        const bitA = parseInt(a[i]) || 0
        const bitB = parseInt(b[j]) || 0

        const sum = bitA + bitB + carry

        result.push(sum % 2)
        carry = Math.floor(sum / 2)

        i--
        j--
    }

    return result.reverse().join('')
};
