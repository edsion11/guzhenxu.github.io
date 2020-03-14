//!--Node类--表示节点
function Node(element) {
  this.element = element;
  this.next = null
  this.previous = null //?----双向链表----//
}
//!--Linkedlist类提供了插入节点，删除节点，显示列表元素的方法
function LList() {
  this.head = new Node("head")
  this.find = find
  this.insert = insert
  this.removeSingleList = removeSingleList
  this.removeDoubleList = removeDoubleList
  this.display = display
  this.findLast = findLast //?双向链表寻找最后一个节点--用来反序显示链表
  this.displayReverse = displayReverse
}

function displayReverse() {
  //!var last=this.head
  var last = this.findLast()
  while (last.previous != null) {
    console.log(last.element)
    last = last.previous
  }
}

function findLast() {
  var currNode = this.head
  while (currNode.next != null) {
    currNode = currNode.next
  }
  return currNode
}
//*删除节点
//!双向链表操作--
function removeDoubleList(item) {
  var currNode = this.find(item)
  if (!(currNode == null)) { //!-----remove的时候要注意判断是否为空---///
    currNode.next = null
    currNode.previous = null
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
  }
}

function removeSingleList(item) { //!-----remove的时候要注意判断是否为空---///
  var currNode = this.head
  //!单向链表操作//
  while (currNode.next != null && currNode.next.element != item) {
    currNode = currNode.next
  }
  var current = this.find(item)
  current.next = null
}
//*寻找节点
function find(item) {
  var currNode = this.head
  while (currNode.element != item) {
    currNode = currNode.next
  }
  return currNode
}
//*插入节点
function insert(newElement, item) {
  var newNode = new Node(newElement)
  var currNode = this.find(item)
  newNode.next = currNode.next
  newNode.previous = currNode
  currNode.next = newNode
}
//*显示链表
function display() {
  var currNode = this.head
  while (currNode.next != null) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}
var cities = new LList();
cities.insert("Conway", "head")
cities.insert("Highway", "Conway")
cities.insert("firstway", "Highway")
cities.insert("secondway", "firstway")
cities.insert("thirdway", "secondway")
cities.insert("noway", "thirdway")
cities.insert("faraway", "noway")
//cities.display()
//console.log("-------------------")
//cities.displayReverse()
//?-------------------循环链表-----------------------//
//?循环链表与单向链表类似，只是创建循环链表时，让其头节点的next属性指向它本身。/
//?换句话说，链表的尾节点指向头节点，形成了循环链表。循环链表可以从后往前遍历链表
function NodeL(element) {
  this.element = element;
  this.next = null
}

function LLList(element) { //!循环链表
  this.head = new NodeL("head")
  this.head.next = this.head
  this.find = find
  this.insert = insert
  //this.remove=remove
  this.display = display
  this.displayReverse = displayReverse
  //!this.displayReverse = displayReverse
  function find(item) {
    var currNode = this.head
    while (currNode.element != item) {
      currNode = currNode.next
    }
    return currNode
  }

  function insert(newElement, item) {
    var newNode = new NodeL(newElement)
    var currNode = this.find(item)
    newNode.next = currNode.next
    currNode.next = newNode
  }

  function display(params) {
    var currNode = this.head
    while (currNode != null && currNode.next.element != "head") {
      console.log(currNode.element)
      currNode = currNode.next
    }
  }

  function displayReverse() {
    var currNode = this.head
  }
}


var city = new LLList();
city.insert("Conway", "head")
city.insert("Highway", "Conway")
city.insert("firstway", "Highway")
city.insert("secondway", "firstway")
city.insert("thirdway", "secondway")
city.insert("noway", "thirdway")
city.insert("faraway", "noway")
city.display()
//*剑指offer链表题目
//!1.输入一个链表，按链表从尾到头的顺序返回一个ArrayList。//
function printListFromTailToHead(head) {
  // write code here
  var arr = [];
  while (head != null) {
    arr.push(head.val) //?--还可以用unshift()向尾部输入
    head = head.next
  }
  return arr.reverse()
}
//!2.给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
//!思路：设置快慢指针，都从链表头出发，快指针每次走两步，慢指针一次走一步，假如有环，一定相遇于环中某点(结论1)。接着让两个指针分别从相遇点和链表头出发，两者都改为每次走一步，最终相遇于环入口(结论2)。以下是两个结论证明：
//!两个结论：
//!1、设置快慢指针，假如有环，他们最后一定相遇。
//!2、两个指针分别从链表头和相遇点继续出发，每次走一步，最后一定相遇与环入口。
//!证明结论1：设置快慢指针fast和low，fast每次走两步，low每次走一步。假如有环，两者一定会相遇（因为low一旦进环，可看作fast在后面追赶low的过程，每次两者都接近一步，最后一定能追上）。
//?-------第一种方法-------//
function EntryNodeOfLoop(pHead) {
  // write code here
  if (pHead == null || pHead.next == null || pHead.next.next == null) {
    return null
  }
  let fast = pHead.next.next;
  let slow = pHead.next;
  while (fast && slow) {
    if (fast !== slow) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      break;
    }
  }
  if (fast == null || slow == null) {
    return null
  }
  fast = pHead;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast

}
//?-------第二种方法-------//
function EntryNodeOfLoop(pHead) {
  // write code here
  var obj = {};
  var node = pHead;
  while (node) {
    if (obj[node.val] === node.next) {
      return node;
    } else {
      obj[node.val] = node.next;
      node = node.next;
    }
  }
  return null;
}
//!在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。
//! 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
//!----两层while搜索---或者-----用递归------
//!---------两层while搜索----------------//
function deleteDuplication(pHead) {
  if (pHead == null || pHead.next == null) {
    return pHead
  }
  var start = new ListNode();
  start.next = pHead;
  var pre = start,
    p = pHead;
  while (p != null && p.next != null) {
    var p1 = p.next;
    if (p.val == p1.val) {
      while (p1 != null && p1.val == p.val) {
        p1 = p1.next;
      }
      pre.next = p1;
      p = p1;
    } else {
      pre = p;
      p = p.next;
    }
  }
  return start.next;
}

//!---------------递归方法-----------------//
function deleteDuplication(pHead) {
  if (!pHead || !pHead.next) return pHead
  if (pHead.val == pHead.next.val) {
    let pNode = pHead.next
    while (pNode != null && pHead.val == pNode.val) {
      pNode = pNode.next
    }
    return deleteDuplication(pNode)
  } else {
    pHead.next = deleteDuplication(pHead.next)
  }
  return pHead
}