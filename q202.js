/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let repeatSet = new Set()

    var getVal = (val) => {
        let sum = 0
        while (val > 0) {
            let digit = val % 10
            sum += (digit * digit)
            val = Math.floor(val / 10)
        }
        return sum
    }
    while (n !== 1 && !repeatSet.has(n)) {
        repeatSet.add(n)
        n = getVal(n)
    }

    return n === 1

};
