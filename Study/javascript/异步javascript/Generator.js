/*
function *foo() {
    let x = yield 2;
    z++;
    let y = yield(x*z);
    console.log(x,y,z)
}
let z = 1;
let it1 = foo();
let it2 = foo();
let val1 = it1.next().value;
console.log(val1,z)
let val2 = it2.next().value;
console.log(val2,z)
val1 = it1.next(val2*10).value;
console.log(val1,z)
val2 = it2.next(val1*5).value;
console.log(val2,z)
console.log(it2.next())
*/
/*
function step(gen) {
    let it = gen();
    let last;
    return function () {
        last = it.next(last).value;
    }
}
let a = 1;
let b = 2;
function *foo() {
    a++;
    yield ;
    b = b*a;
    a = (yield b) + 3
}
function *bar() {
    b--;
    yield ;
    a = (yield 8) +b;
    b = a*(yield 2)
}
let s1 = step(foo);
let s2 = step(bar);
s1();s1();s1();
s2();s2();s2();s2();
console.log(a,b)
*/
//迭代器
/*
let something = (function () {
    let nextVal;
    return {
        [Symbol.iterator]:function () {
            return this;
        },
        next: function () {
            if(nextVal===undefined){
                nextVal = 1;
            }
            else{
                nextVal = (3*nextVal)+6;
            }
            return  {done:false,value:nextVal}
        }
    }
})()
console.log(something.next().value)
console.log(something.next().value)
console.log(something.next().value)
console.log(something.next().value)
*/

//通信顺序进程（CSP）
/*
runAll(function *(data) {
    data.res [];
    var url1 = yield "http://123";
    var p1 = request(url1)
    yield ;
    data.res.push(yield p1)
},function (data) {
    var url2 = yield "http://234";
    var p2 = request(url2);
    yield;
    data.res.push(yield p2)
})
//这一方案中，两个生成器不只是协调控制转移，还彼此通信，通过data.res和yield
*/
function foo(x,y) {
    return x+y;
}
function thunkify(fn) {
    var args = [].slice.call(arguments,1);
    return function (cb) {
        args.push(cb);
        return fn.apply(null,args)
    }
}
var fooThunk = thunkify(foo,3,4);
console.log(fooThunk(sum))
function sum(sum) {
    console.log(sum)
}
