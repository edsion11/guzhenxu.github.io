function Dictionary(element) {
  this.dataStore = new Array
  this.add = add //添加
  this.find = find //搜寻
  this.remove = remove //删除
  this.display = display //显示所有元素
  this.count = count //获取元素个数
  this.clear = clear //清空字典
  this.sort = sort
}

function sort() { //!以key排序//
  for (let key in Object.keys(this.dataStore).sort()) {
    console.log(key + "->" + this.dataStore[key])

  }

  function count() {
    var x = 0
    for (var key in Object.keys(this.dataStore)) {
      ++x
    }
    return x
  }

  function add(key, value) {
    this.dataStore[key] = value
  }

  function find(key) { //?以键作为参数，返回对应的值
    return this.dataStore[key]
  }

  function remove(key) {
    delete this.dataStore[key]
  }

  function clear() {
    for (let key in Object.keys(this.dataStore)) {
      delete this.dataStore[key]
    }
  }

  function display() {
    for (let key in Object.keys(this.dataStore)) {
      console.log(key + "->" + this.dataStore[key])
    }
  }
  var dic = new Dictionary()
  dic.dataStore = {
    0: "faker",
    1: "clearlove",
    2: "marin",
    3: "corol",
    4: "pawn"
  }
  //*div.clear()
  dic.display()
  //console.log(dic.find(3))
  //console.log(dic.count())