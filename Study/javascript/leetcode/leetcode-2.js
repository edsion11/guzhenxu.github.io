/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                console.log([i,j])
                return [i,j]
            }
        }
    }
};
*/
var twoSum = function(nums, target) {
    let map1 = new Map()
   for(let i =0;i<nums.length;i++){
       let value = nums[i]
       map1.set(value,i)
   }var twoSum = function(nums, target) {
        let map1 = new Map()
        for(let i =0;i<nums.length;i++){
            let value = nums[i]
            map1.set(value,i)
        }
        for(let [key,value] of map1){
            let dis = target-key
            let value2 = map1.get(dis)
            if(map1.get(dis)){
                console.log([value,value2])
                return [value,value2]
            }
        }
    };
    for(let [key,value] of map1){
        let dis = target-key
        let value2 = map1.get(dis)
        if(map1.get(dis)){
            console.log([value,value2])
            return [value,value2]
        }
    }
};
twoSum([3,2,4],6)
