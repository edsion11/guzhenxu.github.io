//
function CArray(newelements){
    this.dataStore=[];
    this.pos=0;
    this.numElements=numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    for(var i=0 ;i<this.numElements;i++){
        this.dataStore[i]= i
    } 
}
function setData(){
    for(var i=0;i<this.numElements;i++){
        this.dataStore[i]=Math.floor(Math.random()*(this.numElements-1))
    }
} 
function clear(){
    for(var i=0;i<this.numElements;i++){
        this.dataStore[i]=0
    }
}
function insert(item){
    this.dataStore[this.pos++]=item
}
function toString(){
    var restr = '';
    for(var i = 0;i<this.dataStore.length;i++){
        restr+=this.dataStore[i]+' '
        if(i>0&i%10==0){
            restr+="\n";
        }
    }
    return restr
}
function swap(arr,index1,index2){
    var temp = arr[index1]
    arr[index1]=arr[index2]
    arr[index2] = temp
}
var numElements = 100;
var myNums = new CArray(numElements)
myNums.setData();
//console.log(myNums.toString())
//console.log(myNums.dataStore)
//快速排序法
var arr=myNums.dataStore
var arr1=[]
console.log(arr.length)
function quickSort(arr){
  if(arr.length<=1){
    return arr
  }
  var left=[]
  var right=[]
  current = arr.splice(0,1)
  for(var i=0;i<arr.length;i++){
    if(arr[i]<current){
      left.push(arr[i])  
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current,quickSort(right));
}
console.log(quickSort(arr))