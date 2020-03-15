//?call的第一个参数是绑定给this的值，后面传入的是一个参数列表，第一个参数为null或者undefined默认指向window
var objCall = {
  message: " My name is "
}

function getName(firstName, lastName) {
  console.log(this.message + firstName + ' ' + lastName)
}
getName.call(objCall, 'Dot', 'miaomiaomiao')


//?apply接受两个参数，第一个参数是要绑定给this的值，第二个是一个参数数组，第一个参数为null或者undefined默认指向window
var objCall = {
  message: " My name is "
}

function getName(firstName, lastName) {
  console.log(this.message + firstName + ' ' + lastName)
}
getName.apply(objCall, ['Dot', 'miaomiaomiao'])


var obj = {
  name: "jordan"
}

function printName() {
  console.log(this.name)
}
//?和call很相似，第一个参数是this的指向，第二个开始时接受的参数列表
//?区别在于bind返回的是函数以及结婚搜的参数列表的使用
var dot = printName.bind(obj) //!输出---[Function: bound printName]--//
console.log(dot)
dot() //!输出jordan