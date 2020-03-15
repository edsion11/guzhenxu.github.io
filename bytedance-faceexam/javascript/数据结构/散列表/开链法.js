function HashTable() {
  this.table = new Array(137); //137——官方比较好的设置数组大小的值
  this.buildChains = buildChains;
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  //this.get=get;
}

function buildChains() { //核心方法
  for (var i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function put(data) {
  var pos = this.simpleHash(data);
  var index = 0;
  if (this.table[pos][index] == undefined) {
    this.table[pos][index] = data;
  } else {
    while (this.table[pos][index] != undefined) {
      ++index;
    }
    this.table[pos][index] = data;
  }
}

function showDistro() {
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] != undefined) {
      console.log(i + ": " + this.table[i]);
    }
  }
}
var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia",
  "Mike", "Clayton", "Danny", "Jonathan"
];
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();