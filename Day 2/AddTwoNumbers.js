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

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    const dum = new ListNode();
    let carry = 0;
    let fake = dum;

    while(l1 || l2 || carry){
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        fake.next = new ListNode(sum % 10);
        fake = fake.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dum.next;
};

// Runtime : 91 ms
// Memory Usage : 55.5 MB