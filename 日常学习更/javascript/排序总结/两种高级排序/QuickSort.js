//快速排序算法
arr = [5, 8, 46, 28, 97, 88]
function QuickSort(arr) {
  if (arr.length == 0) return []
  var left = []
  var right = []
  var pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return QuickSort(left).concat(pivot, QuickSort(right))
}
console.log(QuickSort(arr))
