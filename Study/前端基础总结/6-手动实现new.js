/*
*
* 1.创建一个新对象，并继承其构造函数的prototype，这一步是为了继承构造函数原型上的属性和方法
* 2.执行构造函数，方法内的this被指定为该新实例，这一步是为了执行构造函数内的赋值操作
* 3.返回新实例（规范规定，如果构造方法返回了一个对象，那么返回该对象，否则返回第一步创建的新对象）
* */
function myNew(item,...args) {
    let obj = Object.create(item.prototype)
    //这里要注意是否对象会有返回值
    let result = item.apply(obj,args)
    return typeof item()===undefined?obj:result
}
function Book(name){
    this.name = name
    return {
        name:name
    }
}
let b1 = myNew(Book,"javaScript")
let b2 = new Book("javaScript")
let obj1 = new Object()
Book.apply(obj1,["123"])
console.log(obj1)
console.log(b1)
console.log(b2)
