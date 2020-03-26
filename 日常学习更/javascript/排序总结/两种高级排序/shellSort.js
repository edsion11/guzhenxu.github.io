console.time('time')
var arr=[2,3,5,6,2,1,5,123,34,5,66,3,4,2,43,52,45,47,48]
var gaps=[5,3,1]
function shellSort(arr,gaps){
  for(let g=0;g<gaps.length;++g){
    for(let i=0;i<arr.length;++i){
      var temp = arr[i]
      for(var j=i;j>=gaps[g]&&arr[j-gaps[g]]>temp;j-=gaps[g]){
        arr[j]=arr[j-gaps[g]]
      }
      arr[j]=temp
    }
  }
}
shellSort(arr,gaps)
console.log(arr)
console.timeEnd('time')