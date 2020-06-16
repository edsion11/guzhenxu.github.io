/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //debugger
    let str = [];
    let arr = s.split('')
    let max = ""
    for(let value of arr){
        if(str.indexOf(value)===-1){
            str.push(value);
        }else{
            let index = str.indexOf(value)
            let copy = str.slice(index+1)
            str=[].concat(...copy)
            str.push(value)
        }
        max  = str.length>max.length?str.join(''):max
    }
    return max
}
lengthOfLongestSubstring("dvdf")
