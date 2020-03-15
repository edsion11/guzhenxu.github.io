//*散列是一种常用的数据存储技术，桑拿列后的数据可以快速地插入或取用，散列使用的数据结构叫做散列表。
//*在散列表上插入，删除和取用数据非常快
//!查找效率低下->二叉树查找是恶化你好的选择
//*使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是0-散列表的长度
//*散列函数通常有：
//*1.除除数散列法//--index = value % 16 --//
//*2.平方散列法 index = (value * value) >> 28   （右移，除以2^28。记法：左移变大，是乘。右移变小，是除。）
//*3.斐波那契（Fibonacci）散列法
//!存在碰撞问题(collision)->key无限，值有限
//*1.拉链法：　将大小为M 的数组的每一个元素指向一个条链表，链表中的每一个节点都存储散列值为该索引的键值对，这就是拉链法.
//*对采用拉链法的哈希实现的查找分为两步，首先是根据散列值找到等一应的链表，然后沿着链表顺序找到相应的键。
//*2.线性探测法 ---
function HashTable() {
  this.table = new Array(137)
  this.simpleHash = simpleHash
  this.showDistro = showDistro
  this.put = put
  //this.push=push
}
//?将字符串中每个字符的ASCII码值相加似乎是一个不错的散列函数，散列值就是ASCII码值的和除以数字长度的余数
function simpleHash(data) {
  var total = 0
  for (let i = 0; i < data.lenth; ++i) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}

function put(data) {
  var pos = this.simpleHash(data)
  this.table[pos] = data
}

function showDistro() {
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(i + ":" + "->" + this.table[i])
    }
  }
}
var someNames = ["David", "jennifer", "Donnie", "Raymond", "faker"]
var hTable = new HashTable()
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i])
}
console.log(hTable.table)
hTable.showDistro()