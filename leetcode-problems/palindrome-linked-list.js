// https://leetcode.com/problems/palindrome-linked-list
class LN {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {LN} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // change from.next = any to from.next = to
  const createLink = (from, to) => {
    if (!to) from.next = null;
    else from.next = to;
  };

  let slow = head,
    fast = head,
    last;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;

    const next = slow.next;
    createLink(slow, last);
    last = slow;
    slow = next;
  }

  let backward, forward;
  if (fast.next) {
    forward = slow.next;
    createLink(slow, last);
    backward = slow;
  } else {
    backward = last;
    forward = slow.next;
  }

  while (forward && backward) {
    if (forward.val !== backward.val) return false;
    forward = forward.next;
    backward = backward.next;
  }

  return !forward && !backward;
};

const LN1 = new LN(0, new LN(1, new LN(2, new LN(1, new LN(0)))));
const LN2 = new LN(0, new LN(1, new LN(1, new LN(0))));

console.log(isPalindrome(LN1), isPalindrome(LN2));
