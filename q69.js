/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0
    let high = x
    let mid

    while (low <= high) {
        mid = Math.floor((high + low) / 2)
        let root = mid * mid
    
        if (root == x) {
            return mid
        } else if (root > x) {
            high = mid - 1
        } else if (root < x) {
            low = mid + 1
        }
    }

    return high
};
