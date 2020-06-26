function Solution(n,m,array) {
    let arr1 = new Array(n)
    for(let i=0;i<n;i++){
        arr1[i] = new Array()
    }
    for(let i=0;i<m;i++){
        let val = array[i];
        arr1[val-1].push(array[i])
    }
    let min= Infinity;
    for (let i=0;i<n;i++){
        min = arr1[i].length<min?arr1[i].length:min;
    }
    console.log(min)
    return min
}
Solution(3,9,[1,1,2,2,2,3,1,2,3])
