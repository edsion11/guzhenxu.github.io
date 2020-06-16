function read(name) {
  let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === 'file:' ? 0 : 200
  xhr.open('GET', name, false)
  xhr.overrideMimeType('text/html;charset=utf-8') //默认为utf-8
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}
var movies = read('movie.txt').split('\n')
//console.log(movies)
function creatArr(file) {
  var arr = read('movie.txt').split('\n')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim()
  }
  return arr
}
var movielist = new list()
for (var i = 0; i < movies.length; i++) {
  movielist.append(movies[i])
}