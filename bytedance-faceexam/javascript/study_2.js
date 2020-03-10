var grades=[[1,2,3],[4,5,6],[7,8,9]];
var arr=[];
for(var i=0;i<grades.length;i++){
    for(var j=0;j<grades[i].length;j++){
       // console.log(grades[i][j]
       arr.push(grades[i][j])
    }
}
//console.log(arr)
//console.log(grades[1].unshift())
var people=["i","am","a","student"]
//console.log(people.reverse())
function boy(){
    this.x=[];
    this.add=add;
}
function add(data){
    this.x.push(data);
}
var liming = new boy;
liming.add(18)
//console.log(liming.x)
var num = 18;
//console.log(num.toString())
function list(){
    this.data=[]
}
var li = new list;
li.data[0]=1;
li.data[1]=2
console.log(li.data)