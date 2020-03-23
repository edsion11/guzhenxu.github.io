function jieChen(n) {
  if (n <= 1) {
    return 1
  } else {
    return n * jieChen(n - 1)
  }
}

function Find(n) {
  if (n == 1) return 1
  var max = 0
  for (i = 1; i <= n; i++) {
    var s = jieChen(n) / ((jieChen(i)) * jieChen(n - i))
    max += s * i
  }
  var result = max % (10e9 + 7)
  console.log(result)
}
Find(5)