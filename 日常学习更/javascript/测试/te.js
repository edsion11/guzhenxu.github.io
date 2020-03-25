var arr = [4, 3, 6, 8, 15]

function fnc(arr) {
  var min = Math.abs(arr[1] - arr[0])
  console.log(min)
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length - i; j++) {
      if (Math.abs(arr[j] - arr[i]) < min)
        min = Math.abs(arr[j] - arr[i])
    }
  }
  return min
}
console.log(fnc(arr))