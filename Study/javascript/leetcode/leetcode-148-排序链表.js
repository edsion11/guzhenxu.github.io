/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
var sortList = function (head) {
  /**
   *  合并每个递归基
   * @param {*} left
   * @param {*} right
   */
  //
  let mergeList = (left, right) => {
    let res = new ListNode(0)
    let pre = res
    while (left && right) {
      if (left.val <= right.val) {
        pre.next = left
        left = left.next
      } else {
        pre.next = right
        right = right.next
      }
      pre = pre.next
    }
    pre.next = left ? left : right
    return res.next
  }
  /**
   * 递归至每个递归基
   * @param {*} node
   */
  let mergeSort = (node) => {
    if (!node || !node.next) return node
    let mid = node
    let fast = node.next
    while (fast && fast.next) {
      mid = mid.next
      fast = fast.next.next
    }
    let rightList = mid.next
    mid.next = null
    let left = node
    let right = rightList
    return mergeList(mergeSort(left), mergeSort(right))
  }
  return mergeSort(head)
}
sortList()
