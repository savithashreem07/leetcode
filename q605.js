/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    if (n==0) return true

    let planted = 0
    for (let i=0; i<flowerbed.length; i++) {
        if ((flowerbed[i] == 0) && (i==0 || flowerbed[i-1] == 0) && (i==(flowerbed.length - 1) || flowerbed[i+1] == 0)) {
            flowerbed[i] = 1
            planted++

            if (planted >= n) {
                return true
            }
        }
    }
    return false
};
