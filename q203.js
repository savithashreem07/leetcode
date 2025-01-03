/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head

    let dummy = new ListNode(0, head)
    let curr = dummy

    while (curr) {
        while (curr.next && curr.next.val == val) {
            curr.next = curr.next.next
        }
        curr = curr.next
    }

    return dummy.next
};
