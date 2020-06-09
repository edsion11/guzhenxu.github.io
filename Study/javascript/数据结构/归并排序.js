function mergeSort(array,lo,hi) {
    const mid = (lo+hi)>>1
    if(hi-lo<2)
    mergeSort(array,lo,mid)
    mergeSort(array,mid,hi)
}
let array=[1,5,3,2,1,4,3]
mergeSort(array)
console.log(array)
console.log()
