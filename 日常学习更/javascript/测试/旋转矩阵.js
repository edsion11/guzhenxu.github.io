var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
var rotate = function (matrix) {
  const l = matrix[0].length
  const h = matrix.length
  var arr = new Array(l)
  for (let i = 0; i < l; i++) {
    arr[i] = []
  }
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr[i][j] = matrix[matrix.length - 1 - j][i]
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      matrix[i][j] = arr[i][j]
    }
  }
}
var rotate = function (matrix) {
  const length = matrix.length

  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < length; j++) {
      matrix[j].push(matrix[i][j])
    }
  }

  for (let i = 0; i < length; i++) {
    matrix[i].splice(0, length)
  }
}
rotate(matrix)
console.log(matrix)
