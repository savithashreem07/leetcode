/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    let count = 0

    if (n < 5) return count 

    while (n >= 5) {
        n = Math.floor(n / 5)
        count += n 
    }

    return count
    
};
