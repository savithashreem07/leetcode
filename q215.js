/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {

    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        return (2 * index) + 1
    }

    getRightChildIndex(index) {
        return (2 * index) + 2
    }

    insert (val) {
        this.heap.push(val)
        this.heapifyUp()
    }

    peek() {
        if (this.heap.length) return this.heap[0]
        else return null
    }

    swap (index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    heapifyUp() {
        let index = this.heap.length - 1

        while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    heapifyDown() {
        let index = 0

        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallChildIndex]) {
                smallChildIndex = rightChildIndex
            }

            if (this.heap[index] <= this.heap[smallChildIndex]) break

            this.swap(index, smallChildIndex)
            index = smallChildIndex
        }
    }

    extractMin() {
        if (this.heap.length == 0) return null
        if (this.heap.length == 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min
    }

    size() {
        return this.heap.length
    }
}
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap()

    for (let i=0; i<nums.length; i++) {
        minHeap.insert(nums[i])

        if (minHeap.size() > k) {
            minHeap.extractMin()
        }
    }

    return minHeap.peek()
};
