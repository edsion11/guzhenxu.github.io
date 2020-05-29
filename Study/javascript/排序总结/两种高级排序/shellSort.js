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
function shellSort1(arr){
  var N = arr.length;
  var h = 1;
  while(h<N/3){
    h = h * 3 + 1;
  }
  while(h>=1){
    for(var i=h;i<N;i++){
      for(j=i;j>=h&&arr[j]<arr[j-h];j-=h){
        var temp = arr[j-h]
        arr[j-h]=arr[j]
        arr[j] = temp
      }
    }
    h=(h-1)/3
  }
}
console.log("排序前的的arr："+arr)
console.log("arr的长度是：" + arr.length)
shellSort1(arr,gaps)
console.log("排序后的arr："+arr)
console.timeEnd('time')