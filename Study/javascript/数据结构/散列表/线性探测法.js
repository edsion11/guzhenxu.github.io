function HashTable() {
  this.table = new Array(137)
  //this.simpleHash = simpleHash
  this.betterHash = betterHash
  this.showDistro = showDistro
  this.put = put
  this.value = [137]
  this.get = get
}
//*get()方法先搜索键在散列表中的位置，如果找到，则返回数组value中对应位置上的数据，如果没有找到，则循环搜索
//*直到找到对应的键或者数组中的单元为undefined时，后者表示该键没有存入散列表
function get(key) {
  var hash = -1
  hash = this.betterHash(key)
  if (hash > -1) {
    for (var i = hash; this.table[hash] != undefined; i++) {
      if (this.table[hash] == key) {
        return this.value[hash]
      }
    }
  }
  return undefined
}

function put(key, data) {
  var pos = this.betterHash(key)
  if (this.table[pos] == undefined) {
    this.table[pos] = data
    this.value[pos] = data
  } else {
    while (this.table[pos] !== undefined) {
      pos++
    }
    this.table[pos] = data
    this.value[pos] = data
  }
  /*   console.log('values', this.values)
    console.log('table', this.table) */
}

function betterHash(string) {
  const H = 37
  var total = 0
  for (let i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i)
  }
  total = total % this.table.length
  if (total < 0) {
    total += this.table.length - 1
  }
  console.log(string + ":-value:" + "->" + total)
  return parseInt(total)
}

function showDistro() {
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(i + ': ' + this.table[i])
    }
  }
}
var hTable = new HashTable()
var someNames = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan'
]
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i], someNames[i])
}
//console.log(hTable.get("Raymond"))
hTable.showDistro()