// https://leetcode.com/problems/merge-two-sorted-lists/description/

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const mergedList = new ListNode();
  let currNode = mergedList;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    currNode = currNode.next;
  }

  if (list1) currNode.next = list1;
  else if (list2) currNode.next = list2;

  return mergedList.next;
};

const ll1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const ll2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(ll1, ll2));
