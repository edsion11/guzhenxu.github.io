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
/*
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(car1)
console.log(car1.__proto__)
*/
// new 的实现
/*function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
    return {
        name:name,
        age:age,
    }
}
function myNew() {
    let obj = {};
    let Constructor1 = [].shift.call(arguments);
    obj.__proto__ = Constructor1.prototype;
    let ret = Constructor1.apply(obj,arguments);
    return typeof obj==='object' ? ret : obj
}
// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

let person = new Otaku('Kevin', '18');
let person1 = myNew(Otaku,"周宇",'18')
console.log(person.name,person.age,person.habit,person.strength)
//person.sayYourName(); // I am Kevin
console.log(person1.name,person.age,person1.habit,person1.strength)
console.log(Otaku.prototype)
console.log(person1.__proto__)*/
//person1.sayYourName()
//
//如果向Promise传递一个非Promise,非thenable的立即值，就会得到用这个值填充的Promise,如果传递Promise,就会返回同一个Promise.
/*let p1 = new Promise((resolve,reject)=>{
    resolve(42)
})
let p2 = Promise.resolve(42)
p1.then(((value,reason)=>{
    console.log(value)
}))
let p3 = Promise.resolve(p1)
p3.then((value,reason)=>{
    console.log(value)
})*/
//如果传递一个非thenable的值，会尝试展开
/*
let p1 = {
    then:function (cb) {
        cb(42)
    }
}
p1.then((value)=>{
    console.log(value)
})
*/
/*var p = {
    then:function (cb,errcb) {
        cb(42);
        errcb("error!")
    }
}
p.then((value)=>{
    console.log(value)},
    (reason)=>{
    console.log(reason)
})*/
//42
//error!
//
/*function foo() {
    setTimeout(function () {
        ab.cd()
    },1000)
}
try {
    foo()
}
catch (err) {

}*/


//error-first回调风格
/*function foo(cb) {
    setTimeout(function () {
        try{
            let  x  = function(){
                console.log("123")
                return 234
            }
            cb(null,x)
        }
        catch (err) {
            cb(err)
        }
    },1000)
}
foo(function (err,val) {
    if(err){
        console.error(err)
    }else{
        console.log(val())
    }
})*/
//Promise采用的是分离回调风格（split-callback）
//all([...]) race([...])变体->>
//none([...])
//any([...])
//first([...])
//last([...])
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
let p4 = Promise.resolve(4)
let p5 = Promise.reject("Promise.error:"+5)
//let p6 = Promise.reject("Promise.error:"+6)
//let p7 = Promise.reject("Promise.error:"+7)
/*Promise.all([p5,p1,p2,p3,p4]).then(v=>{
    console.log(v)},(s)=>{
    console.log(s)
})

if(!Promise.All){
    Promise.All = function (prs) {
        return new Promise((resolve,reject)=> {
            let sum = 0;
            let PromiseArr = new Array(prs.length)
            prs.forEach((pr, index) => {
                Promise.resolve(pr).then((value) => {
                    PromiseArr[index] = value;
                    sum++
                    if (sum === prs.length) {
                        resolve(PromiseArr)
                    }
                }, (reason) => {
                    reject(reason)
                })
            })
        })
    }
}
Promise.All([p5,p1,p2,p3,p4]).then(v=>{
    console.log(v)},(s)=>{
    console.log(s)
})*/
//none([...])
//这个模式类似与all([...]),不过完成和拒绝的情况呼唤了。所有的Promise都要被拒绝，即拒绝转换为完成值
if(!Promise.none){
    Promise.none  = function (prs) {
        return new Promise((resolve,reject)=>{
            let sum= 0;
            let PromiseArr=  new Array(prs.length)
            prs.forEach((pr,index)=>{
                Promise.resolve(pr).then((value)=>{
                    console.log("这是resolve的值")
                    reject(value)
                },(reason)=>{
                    PromiseArr[index] = reason
                    sum++
                    if(sum===prs.length){
                        reject(PromiseArr)
                    }
                })
            })
        })
    }
}
/*Promise.none([p5,p6,p1,p7]).then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
})*/
//any([...])这个模式与all([..])类似，但是忽略拒绝，只需要完成一个而不是全部
if(!Promise.any){
    Promise.any = function (prs) {
        return new Promise((resolve,reject)=>{
            prs.forEach((pr)=>{
                Promise.resolve(pr).then(
                    (value)=>{
                        resolve(value)
                    },(reason)=>{
                    }
                )
                })
        })
    }
}
Promise.any([p5,p1,p2]).then((value)=>{
    console.log(value)
})
//first只要第一个完成，就会忽略后面的任何完成和拒绝
if(!Promise.first){
    Promise.first = function (prs) {
        prs.forEach(function (pr) {
            Promise.resolve(pr).then(resolve)
        })
    }
}
//last([...])

