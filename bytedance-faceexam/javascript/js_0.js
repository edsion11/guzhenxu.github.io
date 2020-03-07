/*---------------------------有效符号-----------------------------------------------------------------*/
/**
 * 
 */
/*-------------------------------第一道------------------------------/
var isValid = function(s) {
	if (!s || s.length < 1) return true; //字符串为空
	var n = s.length; // 字符串长度
	var stack = [];  //数组栈
	//stack 栈的意思  push pop 只在数组的尾顶部插入或删除元素 栈 FILO
	// 在数组的尾部位置插入push, 数组的头部移除 shift() FIFO
	for (var i = 0; i < n; i++) { //时间复杂度O(n)
	  var c = s[i];
	  // console.log(c);
	  // ( )
	  if (c == '(') { //如果是左括号 等着右括号来消消乐的
		stack.push(c); //入栈， 数组的最后一个元素， 栈顶元素
	  } else {
		// ) 将栈里的元素消一个
		if (stack.length < 1) { //第一个就是)  
		  return false //无效
		}
		stack.pop(); //出栈
	  }
	}
	return stack.length > 0? false:true;
  }--------------------------------------------------------------------*/
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
//
// console.log(typeof(undefined))// console.log(typeof(null))// console.log(typeof(Array))// let arr=[10,20,30]// console.log(typeof(arr))// console.log(arr[0])// console.log(arr[0]==10)// console.log(arr[0]===10)// console.log(null===undefined)// console.log(null==undefined)// let myDate= new Date()// console.log(myDate)// var s="test"// var t=s.len// console.log(t)// let s="meituanwaimai", n=1 ,b=false// let S= new String(s)// let N=new Number(n)// let B=new Boolean(b)// console.log(S)// console.log(s)// console.log(N)// console.log(n)// console.log(B)// console.log(b)// console.log(S==s)// console.log(S===s) console.log(0===false)
//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
/*function Find(target, array) {
	var hang = array.length;
	var lie = array[0].length;
	for (var i = hang - 1, j = 0; i >= 0 && j < lie;) {
		if (target == array[i][j]) {
			return true;
		};
		if (target > array[i][j]) {
			j++;
			continue;
		};
		if (target < array[i][j]) {;
			i--;
			continue;
		};
	}
	return false;()
}*/