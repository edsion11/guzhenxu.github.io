/**
 *let 和 const 声明的变量都不可再次赋值
 *Object.defineProperty(obj, prop, descriptor)
 *obj-->要定义属性的对象。
 *prop-->要定义或修改的属性的名称或 Symbol 。
 *descriptor-->要定义或修改的属性描述符。
 */

function _const(key, value) {
  const desc = {
    value,
    writable: false,
  }
  Object.defineProperty(window, key, desc)
}
/* 


configurable
当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
默认为 false。


enumerable
当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
默认为 false。
数据描述符还具有以下可选键值：

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
默认为 undefined。


writable
当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。
默认为 false。
存取描述符还具有以下可选键值：

get
属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
默认为 undefined。

set
属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
默认为 undefined。 */

var obj = {
  a: Number,
  b: String,
  constructor(x, y) {
    this.a = x
    this.b = y
  },
  get() {
    return this.a
  },
  set(q) {
    this.a = q
  },
}
obj.b = '2'
//obj.a = 48
//
Object.defineProperty(obj, 'a', {
  configurable: false,
  writable: false,
})
obj.a = 48549
//delete obj.a---->configurable设置为true，该属性的描述符可以改变
console.log(obj)
