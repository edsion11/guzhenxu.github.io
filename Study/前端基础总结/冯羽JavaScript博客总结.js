global.name = 'global'
function a(x, y) {
  console.log(x, y)
  console.log(this.name)
}
let obj = {
  name: 'obj',
}
//手写call
Function.prototype.myCall = function (fun, ...args) {
  const fn = Symbol('fn')
  fun = fun || window || global
  fun[fn] = this
  let result = fun[fn](...args)
  delete fun[fn]
  return result
}
//a()//--global
//a.call(obj)//--obj
//a.myCall(obj) //--obj

//手写apply
/* Function.prototype.myApply1 = function (fun, args) {
  fun = fun || window || global
  let fn = Symbol('fun')
  fun[fn] = this
  let result = !args ? fun[fn]() : fun[fn](...args)
  delete fun[fn]
  return result
}
Function.prototype.myApply2 = function (fun, arr) {
  fun = fun || window || global
  const fn = Symbol('fn')
  fun[fn] = this
  if (!arr) {
    eval('fun[fn]()')
    return
  }
  let args = []
  for (let i = 0; i < arr.length; i++) {
    args.push('arr[' + i + ']')
  }
  eval('fun[fn](' + args + ')')
  delete fun[fn]
} */
//a.apply(obj, [1, 2])
//a.call(obj, 1, 2)
//a.myCall(obj, 1, 2)
//a.myApply2(obj, [1, 2])

//------------------------------------------
//bind
Function.prototype.myBind = function (fun, ...args) {
  //bind会改变this指向，返回的参数可以接收参数
  var that = this
  var fBind = function () {
    that.apply(
      this instanceof that ? this : fun, //当作为构造函数时，this指向实例，此时结果为true，将绑定函数的this绑定到该实例。作为普通函数，this指向window或者global，此时为false，this指向fun
      args.concat(Array.prototype.slice.call(arguments))
    )
  }
  //最难的构造部分-->
  //一个绑定函数也能使用new操作符构建对象，
  //这种行为就像把原函数当成构造器。提供的this被忽略，同时调用时的参数被提供给模拟函数
  //这个时候如果直接写fBind.prototype = this.prototype
  fBind.prototype = Object.create(this.prototype)
  return fBind
}
//a('*', '*')
//const b = a.myBind(obj)(1)

//--------------------------------------------------------------
//new 原理以及实现
//1.创建一个空的简单的javaScript对象
//2.链接该对象到另一个对象
//3.步骤1创建的对象作为this的上下文
//4.如果该函数没有返回对象，则返回this
//new Foo()的过程有：
//1.一个继承自Foo.prototype的空对象产生。
//2.使用指定的参数调用构造函数Foo，并将this绑定到新创建的对象。new Foo等同于new Foo()。
//3.由构造函数返回的对象就是new表达式的结果，如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。
/* function New() {
  let obj = new Object()
  Constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  let ret = Constructor.apply(obj, arguments)
  //还得判断fun是否返回一个对象，如果有返回对象，我们就返回这个对象，如果没有，该返回什么就返回什么
  return typeof ret == 'object' ? ret : obj
} */
/* function Book(name) {
  this.name = name
  this.age = 18
  return {
    name: name,
    age: this.age,
  }
}
Book.prototype.sayName = function () {
  console.log(this.name)
}
b1 = new Book('java')
b2 = New(Book, 'C#')
console.log(b1.age)
console.log(b2.name)
 */
//-------------------------------------------
//数组对象和类数组对象
/* const array = [1, 2, 3]
const argument = { 0: '1', 1: '2', 2: '3', length: 3 }
//console.log(array.length)
//console.log(argument.length)
//类数组转数组
const arrayLike = Array.from(argument)
const arrayLike2 = Array.prototype.slice.apply(argument)
const arrayLike3 = Array.prototype.splice.call(argument, 0)
//const arrayLike4 = Array.prototype.concat.apply([], argument)
//展开运算符
console.log({
  arrayLike: arrayLike,
  arrayLike2: arrayLike2,
  arrayLike3: arrayLike3,
  //  arrayLike4: arrayLike4,
}) */
//注意callee属性
//------------------------------------------
//javaScript继承的多种方式
//1.原型链继承
//-->问题：1.引用类型的属性被所有实例共享2.构造实例Child时，不能向Parent传参
//2.借用构造函数继承，call,apply
//优点：避免了引用属性在所有实例被共享   可以在Child中给Parent传参
//缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法
//function Parent() {
//  this.name = ['kevin', 'daisy']
//}
//function Child() {
//  Parent.call(this)
//}
//var child1 = new Child()
//child1.name.push('child1')
//console.log(child1.name)
//var child2 = new Child()
//console.log(child2.name)
//3.组合继承
//融了原型链继承和构造函数的优点，最常用的模式
function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function () {
  console.log(this.name)
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child
var child1 = new Child('java', 18)
child1.colors.push('black')
const child2 = new Child('C#', 20)
console.log(child1)
console.log(child2)
//4.原型式继承
//实质就是ES5的  --->Object.create()的模拟实现
//缺点：包含引用类型的属性值始终都会共享相应的值，和原型链继承一样
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
//5.寄生式继承
//创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象
function createObj2(o) {
  var clone = Object.create(o)
  clone.sayName = function () {
    console.log(this.name)
  }
  return clone
}
//缺点：每次创建对象都会创建一遍方法
//6.寄生组合式继承
//组合式继承的缺点是调用两次父构造函数，寄生组合式可以避免
//主要改变是object()函数代替了之前组合式继承的Child.prototype = new Parent()
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function prototype(child, parent) {
  var prototype = object(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}
prototype(Child, Parent)
