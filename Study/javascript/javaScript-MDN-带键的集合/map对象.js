/*
做个散列表
键为对应值的AscII码值之和
*/
var map1 = new Map()
var name = ['liming', 'liBai', 'daMing', 'Danny', 'Jay', 'Bay', 'WuJi', 'Ding']
var nameCode = new Array()
for (let i = 0; i < name.length; i++) {
  let value = 0
  for (let j = 0; j < name[i].length; j++) {
    value += 3 * String(name[i]).charCodeAt(j) - 1
  }
  nameCode.push(value)
}
for (let i = 0; i < name.length; i++) {
  map1.set(nameCode[i], name[i])
}
console.log(map1)
console.log(map1.get(1438))
