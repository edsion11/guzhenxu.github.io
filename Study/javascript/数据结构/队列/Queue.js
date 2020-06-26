class Queue{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    enqueue(element){
        //入队
        this.items[this.count] = element;
        this.count++;
    }
    isEmpty(){
        return this.count===0
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const  result = this.items[this.count-1];
        delete this.items[this.count-1];
        return result
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count-1]
    }
}
