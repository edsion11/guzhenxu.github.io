let arr = [1,2,2,8,8]
//查找
function Find1(arr,item) {
    let hi = arr.length-1
    while(hi>=0){
        if(arr[hi]===item){
            return hi
        }
        hi--
    }
    return -1
}
function Find2(arr,item) {
    let ind = arr.indexOf(item)
    if(ind) return ind
    return -1
}
//console.log(Find1(arr,2))
//数组去重-->唯一化
function onlyArr(arr) {
    if (arr.length===0) return []
    let result = [].concat(arr)
    let i = result.length-1
    while(i >=0){
        let arrCopy = result.slice(0,i);
        if(arrCopy.indexOf(result[i])>=0){
            result.splice(i,1)
        }
        i--;
    }
    return result
}
console.log(onlyArr([1]))
