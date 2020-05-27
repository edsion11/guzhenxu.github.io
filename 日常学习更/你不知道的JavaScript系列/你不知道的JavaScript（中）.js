/*
let a = 42;
let b;
console.log(typeof a)
console.log(typeof b)//undeclared--未申明
*/

// (function(){
//     function Feature() {
//         /*   */
//     }
//     function doSomething() {
//         let helper = (typeof Feature !=='undefined')?
//             Feature:
//             function () {
//                 console.log("123")
//             }
//             let val  = helper()
//     }
//     doSomething()
// })()
// function doSomething2(Feature) {
//     let helper = Feature||function () {}
//     let val = helper()
// }
// let str1='hello***'
// let str2 = str1.split('').reverse().join('')
// console.log(str2)

//二进制浮点数不精确的问题

/*
console.log(0.1+0.2===0.3)
console.log(Number.MAX_VALUE)
function numbersCloseEnoughToEqual(n1,n2){
  if(!Number.EPSILON){
    Number.EPSILON = Math.pow(2,-52);
  }
    return Math.abs(n1-n2) < Number.EPSILON
}
console.log(numbersCloseEnoughToEqual(0.1+0.2,0.3))
console.log(Object.prototype.toString.call([1,2,3]))// 内部属性-数组
console.log(Object.prototype.toString.call(/regex-literal/i))// 内部属性-正则
console.log(Object.prototype.toString.call(null))// 内部属性-Null
*/
/*let a  = new Boolean(false)
console.log(typeof a)//Object自动转换为true
console.log(a)
if(a){//a 是true
  console.log("aaa")
}*/
/*
let a='abc'
let b = new String(a)
let c = Object(a)
console.log(typeof a,typeof b,typeof c)
console.log(b instanceof String ,c instanceof String )//true true
console.log(Object.prototype.toString.call(b),Object.prototype.toString.call(c))//[object String] [object String]
*/
/*
let arr = new Array(1,2,3)
console.log(arr[0])
function myJoin(data1,data2) {
    let str='';
    for(let i=0;i<data1.length;i++){
      if(i>0){
        str+=data2
      }
      if(data1[i]!==undefined){
        str+=data1[i]
      }
    }
    return str
}
console.log(myJoin([1,2,3],'-'))
let arr1 = Array.apply(null,{length:5})
console.log(arr1)
*/
//
/*
let sym1 = Symbol('my symbol')
console.log(sym1)
console.log(sym1.toString())
console.log(typeof sym1)
let  a = {}
a[sym1] = '123'
console.log(a)
let b = 'string'
console.log(b.charCodeAt(1))
console.log(b.substr(0,2))
console.log(b.substring(0,2))
let c = 123
console.log(c.toFixed(2))*/
//var a =1
//var b=false
//优先级：&&>||>?,:
//console.log(a||b)
/*
let a = 1;
let b = 'foo';
let c = false;
let d = a && b || c ? c ||b ? a: c && b : a;
/!*
* a || c ? c || b ? a : c : a
*
* *!/
console.log(d)
*/
/*
var a=10;
switch (a) {
    case 1:
    case 2:
    default:
        console.log("default");
    case 3:
        console.log("3");
        break
    case 4:
        console.log("4")
}
*/
/*function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name)

delete person.name;
console.log(person.name)*/

/*
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
*/
/*let data = [];

for (let i = 0; i < 3; i++) {
    data[i] = (function (i) {
        return function(){
            console.log(i);
        }
    })(i);
}

data[0]();//0
data[1]();//1
data[2]();//2
*/
