class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function deleteDuplicates(head) {
    if (!head)
        return null;
    if (!head.next)
        return head;
    let prev = head;
    let curr = head.next;
    while (curr) {
        while (curr && curr.val === prev.val) {
            curr = curr.next;
        }
        prev.next = curr;
        prev = curr;
        console.log(prev);
        if (curr) {
            curr = curr.next;
        }
    }
    return head;
}
const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
const node4 = new ListNode(3);
const node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(deleteDuplicates(node1));
