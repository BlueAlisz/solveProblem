var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function deleteDuplicates(head) {
    if (!head)
        return null;
    if (!head.next)
        return head;
    var prev = head;
    var curr = head.next;
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
var node1 = new ListNode(1);
var node2 = new ListNode(1);
var node3 = new ListNode(2);
var node4 = new ListNode(3);
var node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(deleteDuplicates(node1));
