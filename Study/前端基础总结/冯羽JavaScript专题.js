//数组去重
//先排序，再遍历
function unique1(array){
  let arrSort = array.sort((a,b)=>{
      return a-b
  })
  for(let i=0;i<arrSort.length;i++){
    if(arrSort[i]==arrSort[i+1]){
      arrSort.splice(i,1)
      i-=1
    }
  }
  return arrSort
}
//利用filter
function unique2(array){
  const res = array.filter((item,index,array)=>{
    return array.indexOf(item)===index
  })
  return res
}
//利用concat，sort，filter进行排序去重
function unique3(array){
  return array.concat().sort().filter((item,index,array)=>{
    return !index || item!==array[index-1]
  })
}
let array = [1,2,3,3,1]
console.log(unique3(array))
