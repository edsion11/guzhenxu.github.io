//*散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用，散列使用的数据结构叫做散列表。
//*在散列表上插入，删除和取用数据非常快
//!查找效率低下->二叉树查找是最好的选择
//*使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是0-散列表的长度
//*散列函数通常有：
//*1.除除数散列法//--index = value % 16 --//
//*2.平方散列法 index = (value * value) >> 28   （右移，除以2^28。记法：左移变大，是乘。右移变小，是除。）
//*3.斐波那契（Fibonacci）散列法
//!存在碰撞问题(collision)->key无限，值有限
//!数组的大小是待存储数据个数的1.5倍，使用开链法，两倍以及两倍以上用线性探测法
//*1.拉链法：　将大小为M 的数组的每一个元素指向一个条链表，链表中的每一个节点都存储散列值为该索引的键值对，这就是拉链法.
//*对采用拉链法的哈希实现的查找分为两步，首先是根据散列值找到等一应的链表，然后沿着链表顺序找到相应的键。
//*2.线性探测法 ---
function HashTable() {
  this.table = new Array(137) //!避免碰撞，首先确保数组大小是个质数，为了使速组分布更均匀，值取100以上。
  this.simpleHash = simpleHash
  this.betterHash = betterHash //!霍纳算法，ASCII求和时每次要乘以一个质数，取一个较小的质数，如31，37...。下面取了37
  this.showDistro = showDistro
  this.put = put
  //this.push=push
}

function betterHash(string) {
  const H = 37
  var total = 0
  for (let i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i)
  }
  total = total % this.table.length
  if (total < 0) {
    total += this.table.length - 1
  }
  console.log(string + 'value:' + '->' + total)
  return parseInt(total)
}
//?将字符串中每个字符的ASCII码值相加似乎是一个不错的散列函数，散列值就是ASCII码值的和除以数字长度的余数
function simpleHash(data) {
  var total = 0
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i)
  }
  console.log('Hash value:' + data + '->' + total)
  return total % this.table.length
}

function put(data) {
  var pos = this.betterHash(data)
  this.table[pos] = data
}
/* function put(data) {
  var pos = this.betterHash(data);
  var index = 0;
  if (this.table[pos][index] == undefined) {
    this.table[pos][index] = data;
  } else {
    while (this.table[pos][index] != undefined) {
      ++index;
    }
    this.table[pos][index] = data;
  }
} */

function showDistro() {
  var n = 0
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(i + ':' + this.table[i])
    }
  }
}
var someNames = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'faker',
  'Clayton',
  'Jonathan',
]
var hTable = new HashTable()
for (let i = 0; i < 7; i++) {
  hTable.put(someNames[i])
}
//hTable.showDistro()
//!-----------------------------散列化整形键---------------------------------------------------//

function getRandomInt(min, max) {
  //*随机一个指定区间的数
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getStuData(arr) {
  //?生成学生的数据，里面的循环来形成学生的ID，紧跟在循环后面生成一个随机的成绩。
  for (var i = 0; i < arr.length; ++i) {
    var num = ''
    for (var j = 1; j <= 9; ++j) {
      num += Math.floor(Math.random() * 10)
    }
    num += getRandomInt(50, 100)
    arr[i] = num
  }
}
var numStudents = 10
var arrSize = 10
var idLen = 9
var students = new Array(numStudents)
getStuData(students)
//console.log("student data:\n")
for (var i = 0; i < students.length; ++i) {
  //console.log(students[i].substring(0, 8) + " " + students[i].substring(9))
}
//console.log("\n\nData distribution: \n")
var hTable = new HashTable()
for (var i = 0; i < students.length; ++i) {
  hTable.put(students[i])
}
//hTable.showDistro(); //再次发生碰撞
//!对散列表排序和取值
/* function put(key, data) {
  var pos = this.betterHash(key)
  this.table[pos] = data
}

function get(key) {
  return this.table[this.betterHash(key)]
}
var pnumbers = new HashTable()
var name, number
for (var i = 0; i < 3; i++) {
  console.log(("Enter a name (space to quit):"))
  var name = ReadLine()
  console.log("Enter a number")
  var number = ReadLine()
}
name = ""
console.log("Name for Number (Enter quit to stop)")
while (name != "quit") {
  name = readline()
  if (name = "quit") {
    break
  }
  console.log(name + "'s number is " + pnumbers.get(name))
  console.log("Name for number (Enter quit to stop):")
} */
