class Stack{
    constructor() {
        this.count=0;
        this.items = {}
    }
    push(element){
        this.items[this.count] = element;
        this.count++
    }
    size(){//栈的大小
        return this.count
    }
    isEmpty(){
        return this.count===0
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]
        return result
    }
}
const st1 = new Stack()
st1.push(1)
st1.push(2)
st1.push(3)
st1.push(4)
console.log(st1.items[0])
