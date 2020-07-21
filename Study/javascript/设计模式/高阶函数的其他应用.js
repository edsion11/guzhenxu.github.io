//1.柯里化
//柯里化又称部分求值，一个柯里化的函数首先会接受一些参数，接受了这些参数之后，该函数不会立即求职，而是继续返回另外一个函数，、
//刚刚传入的参数在闭包中保存了起来。待到函数真正需要求值的时候，之前的参数一次性用于求值。
var currying = function(fn){
    var args = [];
    return function(){
        if(arguments.length===0){
            return fn.apply(this,args)
        }else{
            [].push.apply(args,arguments)
            return arguments.callee
        }
    }
}
var cost = (function () {
    var money = 0;
    return function(){
        for(var i=0;i<arguments.length;i++){
            money+=arguments[i]
        }
        return money
    }
})()
var cost = currying(cost)
cost(100,200)
console.log(cost())


//去柯里化
Function.prototype.uncurrying = function () {
    var self = this;
    return function(){
        var obj = Array.prototype.shift.call(arguments)
        return self.apply(obj,arguments)
    }
}
//通过这样就把push()编程了一个通用的函数

