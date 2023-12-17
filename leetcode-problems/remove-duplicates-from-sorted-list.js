// https://leetcode.com/problems/remove-duplicates-from-sorted-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let prevNode = head,
    currNode = head?.next;
  while (currNode) {
    if (prevNode.val === currNode.val) {
      currNode = currNode.next;
      prevNode.next = currNode;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  return head;
};

console.log(
  deleteDuplicates({ val: 1, next: { val: 1, next: { val: 4, next: null } } })
);
