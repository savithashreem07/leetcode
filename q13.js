/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let val = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let total = 0

    for (i=0; i<s.length; i++) {
        const curr = val[s[i]]
        const next = val[s[i+1]]

        if (next && curr < next) {
            total -= curr
        } else {
            total += curr
        }
    }

    return total
};
