let arr=[1,2,3,4]
//concat
/*
let arr1 = [1,2,3]
let arr2 = [2,3,4,[2,[3,4]]]
let resultArr1 = arr1.concat(arr2)
console.log(resultArr1)//[ 1, 2, 3, 2, 3, 4, [ 2, [ 3, 4 ] ] ]
*/
//every()---some()
/*const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
console.log(array.every(even))
const arr = []
console.log(arr.some(even));
console.log(arr.every(even))*/
//fill()
/*let obj={
    a:1,
    b:2
}
let arr1 = arr.fill(obj,2,3)
console.log(arr1)
obj.a=3
console.log(arr1)*/
//filter()
/*
let arr1 = arr.filter((value)=>{
    return value>=3
})
console.log(arr1)
*/
//find(),findIndex()
/*console.log(arr.find(value=>{
    return value>=3
}))
console.log(arr.findIndex(value=>value>=3))*/
//flat()
/*const array=[1,2,[3,4,[5,[6,[[[[123,[2],[]]]]] ]]],3,4,5,6, , ,3]
let array1 = array.flat(456)
console.log(array1)
function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

let result = flatDeep(array, Infinity);
console.log(result)*/
//flatmap(),map()
/*
console.log(arr.map(x=>[x*2]).flat())
console.log(arr.map(x => [x * 2]));
console.log(arr.flatMap(x => [x * 2]));
console.log(arr.flatMap(x => [[x * 2]]));
*/

/*let  a = Array.prototype.map.call("Hello World", function(x) {
    return x.charCodeAt(0);
})
console.log(a)
console.log(['1', '2', '3'].map( str => parseInt(str) ));*/
