/*function bubbleSort(array){
    var n=array.length-1,temp=0;
    while(n!=0){
        console.log('while')
        var Off=true,//该值用来判断不发生交换时把n置为0;
            len=n;//保存n的值,避免与n冲突。
        for(var i=0;i<len;i++){
            console.log('for')
            if(array[i]>array[i+1]){
                temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                Off=false;
                n=i;//记录最后一次发生交换的值;
            }
        }
        if(Off)n=0;
    }
    return array;
}
let array=[1,3,2,4,3,5]
console.log(bubbleSort((array)))
*/

function bubbleSort(arr) {
    let loopTimes = 0  // 循环计数器
    let steps = 0 // 步数
    let last = arr.length - 1;
    for (let i = 0, len = arr.length; i < len; i++) {
        let finished = true // flag
        let pos = 0;
        for (let j = 0, len = last; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                finished = false;
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                pos = j
            }
            steps++;
        }
        last = pos
        loopTimes++;
        if (finished)
            break
    }
    console.log(steps)
    return { loopTimes, steps }
}

let arr = [6, 4, 3, 5, 2, 1, 9, 10, 11, 12, 14, 15]
let res = bubbleSort(arr)

console.log('the Array after sorting:' + arr)
console.log('steps:' + res.steps)
console.log('loopTimes:' + res.loopTimes)
