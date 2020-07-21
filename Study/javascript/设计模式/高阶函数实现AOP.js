//AOP（面向切面编程）的主要作用是吧一些和核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计，安全控制，异常处理等。
// 把这些功能抽离出来之后，再通过“动态引入”的方式参入业务逻辑模块中，好处是保持业务逻辑模块的纯净和高内聚性。
//！！在JavaScript中实现AOP，都是指把一个函数“动态织入”到另一个函数之中
Function.prototype.before = function(beforefn){
    var _self = this;
    return function(){
        beforefn.apply(this,arguments)
        return _self.apply(this,arguments)
    }
}
Function.prototype.after = function (afterfn) {
    var _self = this;
    return function (){
        var ret = _self.apply(this,arguments);
        afterfn.apply(this,arguments);
        return ret
    }
}
var func = function () {
    console.log(2)
}
func = func.before(function () {
    console.log(1)
}).after(function () {
    console.log(3)
})
func()
//比如别人有个函数是输出当前时间，而我们想要输出温度然后输出时间。如果不用这种AOP的装饰着设计模式写的化，就是把我们的输出温度函数嵌入到输出时间函数内部。
// 而利用AOP的思想可以在原型上添加方法实现这个操作，这个方法更为灵活。
