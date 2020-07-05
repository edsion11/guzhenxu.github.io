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
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount+1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        //console.log(objString)
        return objString
    }
}
let q1=new Queue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
console.log(q1.toString())

