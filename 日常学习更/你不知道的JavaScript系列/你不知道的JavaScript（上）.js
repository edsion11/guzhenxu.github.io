/* for (var i = 1; i <= 5; i++) {
  setTimeout(function time() {
    console.log(i)
  }, 1000 * i)
}
 */
/* for (var i = 0; i <= 5; i++) {
  ;(function () {
    setTimeout(() => {
      console.log(i)
    }, 1000 * i)
  })()
} */
/* for (var i = 0; i <= 5; i++) {
  ;(function (j) {
    setTimeout(() => {
      console.log(j)
    }, j * 1000)
  })(i)
}
 */
/* for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000 * i)
} */
/* var obj = {
  params: 123,

  f1: function () {
    console.log(this) //undefined
    return function () {
      console.log(this) //undefined
      return function () {
        console.log(this) //undefined
      }
    }
  },
}
obj.f1()()()
 */
/* function foo(str, a) {
  eval(str)
  console.log(a, b)
}
var b = 2
foo('var b=4', 234)
 */
/* function f1() {
  //'use strict'
  console.log(this.a)
}
a = 2
;(function () {
  'use strict'
  f1()
})()
 */
/* function f1() {
  console.log(this.a)
}
var obj = {
  a: 2,
  f2: f1,
}
obj.f2() */
/* function foo() {
  console.log(this.a)
}
var obj = {
  a: 3,
  foo: foo,
}
var bar = obj.foo
a = '123'
bar()
 */
/* function foo() {
  console.log(this.a)
}
function DoFoo(f) {
  f()
  obj.foo()
}
a = '123'
obj = {
  a: 223,
  foo: foo,
}
obj.foo()
DoFoo(obj.foo) */
/* function foo(something) {
  this.a = something
}
var obj = {
  foo: foo,
}
var obj2 = {
  a: 1,
}
obj.foo(2)
var obj1 = new obj.foo(4)
console.log(obj.a)
console.log(obj1.a)
console.log(obj2.a) */

/* function foo(p1, p2) {
  this.a = p1 + p2
}
var bar = foo.bind(null, 'p1')
//bind()的功能之一，就是可以把除了第一个参数之外的其他参数都传给下层的函数（“部分应用”）,函数柯里化的一种。
var baz = new bar('p2')
console.log(baz) */
/* function foo() {
  console.log(this.a)
}
var o1 = {
  a: 1,
}
var o2 = {
  a: 3,
  foo: foo,
}
var o3 = {
  a: 4,
}
o2.foo() //3
;(o3.foo = o2.foo)() //undefined */
/* function foo() {
  return (a) => {
    console.log(this.a)
  }
}
var obj1 = {
  a: 2,
}
var obj2 = {
  a: 3,
}
var bar = foo.call(obj1)
bar.call(obj2) //2 */
/* var obj = {
  get a() {
    return this._a_
  },
  set a(val) {
    this._a_ = val * 2
  },
}
obj.a = 2
console.log(obj.a)
console.log(obj._a_)
console.log('a' in obj)
console.log('_a_' in obj)
console.log(Object.prototype.hasOwnProperty.call(obj, 'a'))
console.log(Object.keys(obj))
 */
/* var randoms = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          value: Math.floor(Math.random() * 10),
        }
      },
    }
  },
}
var randoms_pool = []
for (var n of randoms) {
  randoms_pool.push(n)
  if (randoms_pool.length === 50) break
} */

/* var obj = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
}

Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this //obj
    var idx = 0
    var ks = Object.keys(obj) //遍历[ 'a', 'b', 'c', 'd' ]
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        }
      },
    }
  },
})
var it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
 */
//第四章 --类
/* Foo = {
  init: function (who) {
    this.me = who
  },
  identify: function () {
    return 'I am' + this.me + '.'
  },
}
var Bar = Object.create(Foo)
console.log(Bar.__proto__) */


