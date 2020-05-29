/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let longestCommonSubsequence = function (text1, text2) {
    let n = text1.length
    let m = text2.length
    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0))
    //这里用到了ES6的新Array方法from,实现一个浅拷贝，向数组赋值0，
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    return dp[n][m]
}
