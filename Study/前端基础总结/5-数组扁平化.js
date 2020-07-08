//1.ES6的flat()
const arr = [1, [1,2], [1,2,3]]
arr.flat(Infinity)  // [1, 1, 2, 1, 2, 3]
//序列化后正则
const arr = [1, [1,2], [1,2,3]]
const str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`
JSON.parse(str)   // [1, 1, 2, 1, 2, 3]
//递归
const arr = [1, [1,2], [1,2,3]]
function flat(arr) {
    let result = []
    for (const item of arr) {
        item instanceof Array ? result = result.concat(flat(item)) : result.push(item)
    }
    return result
}

flat(arr) // [1, 1, 2, 1, 2, 3]
//reduce
const arr = [1, [1,2], [1,2,3]]
function flat(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(cur instanceof Array ? flat(cur) : cur)
    }, [])
}
flat(arr)  // [1, 1, 2, 1, 2, 3]
//迭代+展开
// 每次while都会合并一层的元素，这里第一次合并结果为[1, 1, 2, 1, 2, 3, [4,4,4]]
// 然后arr.some判定数组中是否存在数组，因为存在[4,4,4]，继续进入第二次循环进行合并
let arr = [1, [1,2], [1,2,3,[4,4,4]]]
while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
}
console.log(arr)  // [1, 1, 2, 1, 2, 3, 4, 4, 4]
