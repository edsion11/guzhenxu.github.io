function lcs(word1, word2) {
  var max = 0
  var index = 0
  var charr = new Array(word1.length + 1)
  for (let i = 0; i < word1.length + 1; i++) {
    charr[i] = new Array(word2.length + 1)
    for (let j = 0; j < word2.length + 1; j++) {
      charr[i][j] = 0
    }
  }
  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i == 0 || j == 0) {
        charr[i][j] = 0
      } else {
        //"abcad","accad"
        if (word1[i - 1] == word2[j - 1]) {
          charr[i][j] = charr[i - 1][j - 1] + 1
        } else {
          charr[i][j] = 0
        }
      }
      if (max < charr[i][j]) {
        max = charr[i][j]
        index = i
      }
    }
  }
  console.log(charr)
  var str = ''
  if (max == 0) {
    return ''
  } else {
    for (let i = index - max; i <= index - 1; ++i) {
      str += word2[i]
    }
    return str
  }
}
console.log(lcs('abcaf', 'accad'))
