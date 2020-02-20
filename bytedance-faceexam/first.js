/*-------------------求最长括号匹配长度-------- */
/*function longestvalid(s){//暴力法直接，空间复杂度为 O(n^2)
	//最长匹配括号长度leetcode32
	var max=0;
	if(s.length == 0||s.length == 1) return max;
	var stack=[];//使用栈来匹配	 空间复杂度(O(n))
    for(var i=0;i<s.length;i++){
		var tmpMax=0;
		for(var j=i;j<s.length;j++){
			if(s[j]=='('){
				stack.push('(');//入栈
				tmpMax++;
			}else if(s[j]==')'){
				if(stack.length==0){
					max=tmpMax?tmpMax:max;
                   	break;			
				}else{
				 stack.pop();
				 tmpMax++;    
			}
		}
	}
	if(stack.length==0){
		max=max<tmpMax?tmpMax:max
	}
	stack=[];
}
	return max;
}*/
//优化时间复杂度的一种--------------------------------------------------------------------------
//----------------------下标法--------------------------------------------------------------
/*function longestvalid(s){
	if(s.length==1||s.length == 0) return 0;
	var stack=[-1];//使用栈来匹配	 空间复杂度(O(n))
	var max=0;
    for(var i=0;i<s.length;i++){
		if(s[i]=='('){
			stack.push(i);//入栈
		}else {
			stack.pop();//右括号，下标出栈！
              if(stack.length<1){
				  stack.push(i);
			  }else{
				  max=Math.max(max,i - stack[stack.length-1])
			  }
		}
	}
	return max;
}
console.log(longestvalid('((((((()))))))'))*/
//----------------------------------我是分界线------------------------------//
//----------------剑指offer-39---------------------------------------------//
//给定一个数组candidates和目标target，找出数组中所有数字和为target的组合----//
/*function Findcombination(str,tar){
	for(var i=0;i<str.length-1;i++){
		
	}
}*/
/*------------------------------------------------------------------------------*/
