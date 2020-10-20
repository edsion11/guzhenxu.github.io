//短时间往页面中大量添加DOM节点极有可能造成卡死
//这个问题的解决方案之一是利用下面的timeChunk函数，它会让创建节点的工作分批进行，比如1s创建1000个节点，改为每隔200ms创建200个节点
var timeChunk = function (ary,fn,count) {
    var obj,t;
    var len = ary.length;
    var start = function(){
        for(var i =0;i<Math.min(count||1,ary.length);i++){
            var obj = ary.shift();
            fn(obj)
        }
    }
    return function () {
        t = setInterval(()=>{
            if(ary.length===0){
                return clearInterval(t)
            }
            start()
        },200)
    }
}
let arr  =[]
function f1(){
    console.log('1')
}
timeChunk(arr,f1,20)()

