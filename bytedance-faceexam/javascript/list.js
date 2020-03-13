function list() { //创建个列表类
  this.listSize = 0; //列表元素个数
  this.pos = 0; //列表当前位置
  this.dataStore = [];
  this.clear = clear; //方法清空列表
  this.find = find; //寻找元素方法
  this.toString = toString; //返回列表的字符串形式
  this.insert = insert; //现有元素之后插入新元素
  this.append = append; //列表末尾添加元素
  this.remove = remove; //删除元素
  //---------以下为列表遍历方法------
  this.front = front; //将列表的当前位置移动到第一个元素
  this.end = end; //将列表的当前位置移动最后一个元素
  this.prev = prev; //当前位置前移一位
  this.next = next; //当前位置后移一位
  this.length = length; //列表中元素的个数
  this.currPos = currPos; //列表的当前位置
  this.moveTo = moveTo; //移动到指定位置
  this.getElement = getElement; //返回列表当前位置的元素
  this.contains = contains; //
  function append(element) {
    this.dataStore[this.listSize++] = element;
  }

  function length() {
    return this.dataStore.length
  }

  function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element) return i
    }
    return -1
  }

  function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.size;
      return true
    }
    return false
  }

  function toString() {
    return this.dataStore;
  }

  function insert(element, item) {
    //var insertPos=this.find(item);
    this.dataStore.splice(item + 1, 0, element);
    ++this.listSize;
    return true
  }

  function clear() {
    delete this.dataStore; //直接删除
    this.dataStore = []; //创建
    this.listSize = this.pos = 0; //重新赋值
  }

  function contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] == element)
        return true
    }
    return false
  }

  function front() {
    this.pos = 0
  }

  function end() {
    this.pos = this.dataStore.length - 1
  }

  function prev() {
    if (this.pos > 0) {
      --this.pos
    }
  }

  function next() {
    if (this.pos < dataStore.length - 1) {
      ++this.pos
    }
  }

  function currPos() {
    return this.pos;
  }

  function moveTo(item) {
    this.pos = item;
  }

  function getElement() {
    return this.dataStore[this.pos]
  }
}

/* var li = new list;
li.dataStore = ["first", "second", "three", "four", "five"]
li.remove("four")
console.log(li.dataStore)
console.log(li.length()) */
//迭代器访问列表
//不用关心底层的数据结构，当给例表添加一个元素时，索引就不对了，此时只用更新列表，不用更新迭代器
//for(li.front();li.currPos()<li.length();li.next()){}从前往后读取---