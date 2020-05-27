#### 第一章-值类型
##### typeof
typeof对于定义了的变量但值为`undefined`的变量会输出undefined，而未定义的变量和定义后不赋值的变量都会输出`undefined`。

🍎

所以有一些安全防范机制，比如如下：
```js
(function(){
    function Feature() {
        /*   */
    }
    function doSomething() {
        let helper = (typeof Feature !=='undefined')?
            Feature:
            function () {
                console.log("123")
            }
            let val  = helper()
    }
    doSomething()
})()
```
这里Feature不是个全局变量，但还是可以使用typeof的安全防范机制来做检查，也可以在浏览器环境下用window对象的属性来判断。
这里本书提到了“依赖注入设计模式”，英文名：dependency injection
```js
function doSomething2(Feature) {
    let helper = Feature||function () {}
    let val = helper()
}
```
代码简洁了很多
复习：JavaScript七种内置类型:null,undefined,number,string,boolean,symbol,object

#### 第二章-值
numer:数位：1位=1比特；1字=2字节；1字节=8位；1字=16位。
##### 内部属性[[Class]]
```js
console.log(Object.prototype.toString.call([1,2,3]))// 内部属性-数组
console.log(Object.prototype.toString.call(/regex-literal/i))// 内部属性-正则
console.log(Object.prototype.toString.call(null))// 内部属性-Null
```
##### 封装对象包装
object wrapper

由于基本类型没有length，toString()等方法，需要封装对象才能访问
```js
let a  = new Boolean(false)
console.log(typeof a)//Object自动转换为true
console.log(a)
if(a){//a 是true
  console.log("aaa")
}

----------------------------------------------------------------
let a='abc'
let b = new String(a)//封装
let c = Object(a)//封装
console.log(typeof a,typeof b,typeof c)
console.log(b instanceof String ,c instanceof String )//true true
console.log(Object.prototype.toString.call(b),Object.prototype.toString.call(c))//[object String] [object String]

```
##### 使用原生函数构造
 - Array(..)
 - Object(..)
 - Function(..)
 - RegExp(..)
 - Date(..)
 - Error(..)
 - Symbol(..)

#### 运算符 && || ? :

优先级：&& > || > ?,:

运算符的关联
在&&和||多次出现时，采用左关联方式：从左向右执行，所以`a && b && c`会被处理为`(a&&b)&&&c`
而? :是右关联，即` a ? b : c ? d : e`会被处理为`a ? b :(c ? d : e)`,还有一个右关联的例子是 "="运算符，`var a,b,c;a = b = c = 1`,首先执行的是c=1,然后是b=... ，c=... 。
```js
let a = 1;
let b = 'foo';
let c = false;
let d = a && b || c ? c ||b ? a: c && b : a;
//((a && b) || c) ? ((c || b) ? a :(c && b)) : a
console.log(d)
```
