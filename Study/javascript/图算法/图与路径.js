function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; ++i) {
    this.adj[i] = []
    this.adj[i].push("")
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
  this.mark = []
  for (let i = 0; i < this.vertices; i++) {
    this.mark[i] = false
  }
}

function addEdge(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] != undefined) {
        console.log(i + "->" + this.adj[i][j] + ' ')
      }
    }
  }
}
var miGong = new Graph(5)
miGong.addEdge(0, 1)
miGong.addEdge(0, 2)
miGong.addEdge(3, 1)
miGong.addEdge(2, 4)
console.log(miGong.mark)
//---深度优先搜索算法:从一条路径的起点开始追溯，直到到达最后一个顶点，然后回溯，继续追溯下一个路径，直到最后一个顶点。
function dfs(v) {
  this.mark[v] = true
  if (this.adj[v] != undefined) {
    console.log("visited:" + v)
    for(let j=0;j<this.vertices;j++) {
      if (this.mark == false) {
        this.dfs(w)
      }
    }
  }
}