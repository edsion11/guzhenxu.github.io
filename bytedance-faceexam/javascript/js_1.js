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
		if (target < array[i][j]) {
			i--;
			continue;
		};
	}
	return false;
}*/
<<
<<
<< < HEAD
/* function Person() {};
var person1 = new Person();
var person2 = new Person();
Person.prototype.getName = function () {
	return this.name;
};
Person.prototype.name = 'tom';
person1.name = 'jerry';
var name = person2.getName();
console.log(name) */
/* function Find(n, m, array) {
	var days_all = 0
	if (n > m) return 0;
	if (n == m) return 1;
	var days = 2;
	for (;; days++) {

	}


}
console.log(Find(10, 1, [1, 2, 5])) */
/*小明要为n个人计划一次火星的探险，其中一个重要的任务是为每个参与者安排食物。仓库里面有m个能用一天的食物包裹，每个食物包裹有不同的类型ai。
每个人每天必须用且只能用一个食物包裹。由于某些原因，在整个过程中，每个人只能用同一种类型的食物包裹，但是不同的人用的食物包裹可以不一样。
给出人数以及食物包裹的情况，请你求出这趟探险最多可以持续多少天。 */
/*var arr = [5, 5, 3, 1, 55, 3, 8, 3, 4, 9, 10, 55]
var arr1 = arr.sort(function (a, b) {
	return a - b
})
console.log(arr1);*/
//--------------------------------------------------------------------------------------------------//
function replaceSpace(str) {
	return str.replace(/\s/g, '我是空格')
}
console.log(replaceSpace_2("we are the world !  "))

function replaceSpace_2(str) {
	var reg = new RegExp(" ", "g"); //正则表达式 //(regular expression)RegExp('patter',i__执行对大小写不敏感的匹配。g全局匹配__m__多行匹配)得到reg
	var newstr = str.replace(reg, "我是空格");
	return newstr;
}
//-------- replace the common exist string-------
/*function replaceword(str1, str2) {
	if (str2.length <= 0) return str1
	var s1 = str1;
	for (var i = 0; i < str2.length; i++) {
		var s2 = str2[i];
		var reg = new RegExp(s2, "g")
		var s1 = s1.replace(reg, "");
	}
	return s1;
}
<<<<<<< HEAD:bytedance-faceexam/javascript/js_1.js
console.log(replaceword("they are students", "aeiou"))*/
=======
console.log(replaceword("they are students", "aeiou"))*/
<<<<<<< HEAD
function () {

}
console.()
=======
>>>>>>> 91ec8f502cdea7e4309ae29b6bf6b280a5cb67d2
>>>>>>> d9a723826015c21ca8dbc934ffd80af5fe4f6df2
>>>>>>> d2851eefaf04e4efe95c6005affd6201dce51b1d:bytedance-faceexam/fighting_1.js
