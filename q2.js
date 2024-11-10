/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0
    let carry = 0
    let result = new ListNode(0)
    let current = result

    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0
        let val2 = l2 ? l2.val : 0
        sum = carry + val1 + val2
        carry = parseInt(sum / 10)

        current.next = new ListNode(sum % 10)
        current = current.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) {
        current.next = new ListNode(carry)
    }

    return result.next
};
