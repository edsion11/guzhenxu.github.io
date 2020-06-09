function insertSrot(arr){
    let array = new Array(0).concat(...arr)
    for(let i=1;i<array.length;i++){
        let temp = array[i]
        let j=i
        while(j>0&& array[j-1]>=temp){
            array[j] = array[j-1]
            --j
        }
        array[j] = temp
    }
    return array
}
let arr = [3,2,5,3,5,1,2,3,5,3,5]
console.log(insertSrot(arr))
