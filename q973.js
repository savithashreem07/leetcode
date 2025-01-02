/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if (points.length == k) return points

    points.sort((a, b) => {
        let pointA = a[0] ** 2 + a[1]  ** 2
        let pointB = b[0] ** 2 + b[1]  ** 2

        return pointA - pointB
    })

    return points.slice(0, k)
};
