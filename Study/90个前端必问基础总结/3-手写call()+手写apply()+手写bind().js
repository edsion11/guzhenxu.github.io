Function.prototype.mycall = function (thisArg, ...args) {
  //console.log(this)
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || global || window // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args) // 执行当前函数
  delete thisArg[fn] // 删除我们声明的fn属性
  return result
}
Function.prototype.myApply = function (thisArg, args) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || window // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args) // 执行当前函数
  delete thisArg[fn] // 删除我们声明的fn属性
  return result // 返回函数执行结果
}

Function.prototype.myBind = function (thisArg, ...args) {
  if (typeof this !== 'function') {
    throw TypeError('Bind must be called on a function')
  }

  var self = this
  // new优先级
  var fbound = function () {
    self.apply(
      this instanceof self ? this : thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }
  // 继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype)

  return fbound
}

function f1() {
  //console.log(this) //global
  console.log(this.name)
}

//global.name = '123'

//var name = '123'
//f1.call() //undefined
//  var定义的变量是在模块中，获取不到

/* var obj = {
  name: '123',
} */
//f1.call(obj)
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(
    ' '
  )
  console.log(reply)
}
global.obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
}
greet()
greet.mycall(obj)
greet.myApply(obj, [])
let result = greet.bind(obj)
result()
//变更函数调用者示例
//function foo() {
//  console.log(this.name)
//}

// 测试
//const obj123 = {
//  name: '写代码像123',
//}
//obj123.foo = foo // 变更foo的调用者
//obj123.foo() // '写代码像123'
var objx = {
  x: 123,
  getX: function () {
    return this.x
  },
}
const yy = objx.getX
