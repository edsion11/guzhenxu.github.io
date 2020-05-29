/**
 *
 * @param {string}text1
 * @param {string}text2
 * @returns {number|*}
 */
function longest(text1,text2) {
    /**
     *
     * @param {number}m
     * @param {number}n
     * @returns {number|*}
     * @constructor
     */
    function LCS(m,n) {
        if(m===text1.length||n===text2.length){
            return 0
        }
        if(text1[m]===text2[n]){
            return LCS(m+1,n+1)+1
        }else{
            return Math.max(LCS(m+1,n),LCS(m,n+1))
        }
    }
    let m=0,n=0;
    return LCS(m, n)
}

console.log(longest('educations','declatn'))
