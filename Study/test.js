/*给出一个正整数N和长度L，找出一段长度大于等于L的连续非负整数，他们的和恰好为N。答案可能有多个，我我们需要找出长度最小的那个。
例如 N = 18 L = 2：
5 + 6 + 7 = 18
3 + 4 + 5 + 6 = 18
都是满足要求的，但是我们输出更短的 5 6 7*/
//第一种想的超时--，通过率50%
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
  var tokens = line.split(' ');
  m = (parseInt(tokens[0]))
  n = (parseInt(tokens[1]))

  function Find(m, n) {
    var arr = []
    var x = 1
    var str = "No"
    for (var i = n; i < 105; i++) {
      if (i > 100) return str
      for (let x = 1; x < m / 2; x++) {
        if (i * (2 * x + i - 1) / 2 == m) {
          while (i >= 1) {
            arr.push(x + --i)
          }
          var result = arr.reverse().join(' ')
          return result
        }
      }
    }
  }
  console.log(Find(m, n))
});
//第二种--
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
  var tokens = line.split(' ');
  N = (parseInt(tokens[0]))
  L = (parseInt(tokens[1]))
  function Find2(N,L){
  
}
