/**
 * Searches for a target value in a possibly rotated sorted array.
 *
 * @param {number[]} nums - A sorted array that has been possibly rotated.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target value if found, -1 otherwise.
 */
function search(nums, target) {
    if (!nums.length) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
