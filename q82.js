/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy

    while (curr.next && curr.next.next) {
        if (curr.next.val == curr.next.next.val) {
            const temp = curr.next.val

            while (curr.next && curr.next.val == temp) {
                curr.next = curr.next.next
            }
        } else {
            curr = curr.next
        }
    }

    return dummy.next
};
