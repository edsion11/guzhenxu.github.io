var event = {
    clientList:[],
    subscribe(key,fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger(){
        var key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key];
        if(!fns||fns.length===0){
            return false
        }
        for(let i=0,fn;fn = fns[i++];){
            fn.apply(this,arguments);
        }
    },
    unsubscribe(key,fn) {
        var fns = this.clientList[key];
        if(!fns){
            return false
        }
        if(!fn){
            fns&&(fns.length=0)
        }else{
            for(let l = fns.length-1;l>=0;l--){
                let _fn = fns[l];
                if(_fn===fn){
                    fns.splice(l,1)
                }
            }
        }
    }
}
var installEvent = function(obj){
    for(let i in event){
        obj[i] = event[i]
    }
}
//example
var sales = {}
installEvent(sales)
//订阅
let xiaoming = (price)=>{
    console.log("apple-price",price)
}
let xiaoHong =(price)=>{
    console.log("banana-price",price)
}
sales.subscribe("apple",xiaoming)
sales.subscribe("banana",xiaoHong)
sales.trigger("apple",500)//apple-price 500
sales.trigger("banana",600)//banana-price 600
sales.trigger("apple",1200)//apple-price 1200
sales.unsubscribe("apple",xiaoming)
sales.trigger("apple",1)
