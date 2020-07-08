/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if(ratings.length==0) return 0
  if(ratings.length==1) return 1
  let rate = Array.from(ratings)
 let result = new Array(ratings.length).fill(1)
 let flag = true
 while(flag){
   flag = false
   for(let i=0;i<rate.length;i++){
     if(i!=rate.length-1&&rate[i]>rate[i+1]&&result[i]<=result[i+1]){
       result[i]+=1
       flag = true
     }
     if (i > 0 && rate[i] > rate[i - 1] && result[i] <= result[i - 1]) {
       result[i] = result[i - 1] + 1;
      flag = true;
    }
   }
 }
 let sum=0
 for(var item of result){
    sum+=item
 }
 return sum
};
/*
时间复杂度：O(n^2)。对于每个元素，我们最多要遍历n次。
空间复杂度： O(n)。需要一个长度为 n的 candies 数组。
*/
var candy2 = function(ratings){
    if(ratings.length==0) return 0
    if(ratings.length==1) return 1
    let rate = Array.from(ratings)
    let result = new Array(ratings.length).fill(1)
    for(let i=0;i<rate.length;i++){
      if(rate[i]>rate[i-1]){
        result[i] = result[i-1]+1
      }
    }
    let sum = result[rate.length-1]
    for (let i = rate.length - 2; i >= 0; i--) {
            if (rate[i] > rate[i + 1]) {
                result[i] = Math.max(result[i], result[i + 1] + 1);
            }
            sum += result[i];
    }
    return sum
}
//console.log(candy([1,2,2]))
console.log(candy2([1,2,2]))
