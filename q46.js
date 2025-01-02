/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []

    var backtrack = function (path, options) {
        if (path.length == nums.length) {
            result.push([...path])
        }

        for (let i=0; i<options.length; i++) {
            path.push(options[i])

            backtrack(path, options.filter((val, index) => index !== i))
            path.pop()
        }
    }

    backtrack([], nums)

    return result
};
