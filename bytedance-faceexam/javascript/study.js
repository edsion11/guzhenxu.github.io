//--------------------------------study记录---------------------------------------------
//-----------------------------------1.数组---------------------------------------
// !(7 < 3) && console.log("hello")// console.log(!522)// console.log(Boolean(500))
var arr = new Array(9, 12, 23, 14, 5, 100, 9, 2, 4, 1, 2, 9);
//----------------------------------------------------------------------------
// join(separator)方法：将数组的元素组起一个字符串，以separator为分隔符，省略的话为默认","
// var arr1 = arr.join("|");
//--------------------------------------------------------------------------
//push(),pop()入栈与出栈，
//push()接受任意数量的参数，把他们逐个添加到数组末尾，并返回修改后数组的长度
//pop()数组末尾移除最后一项，减少数组的length值，然后返回移除的项
/*var stack = [];
for (let i = 0; i < arr.length; i++) {
	stack.push(arr[i]);
	if (arr[i] > 20) {
		stack.pop();
	}
}
console.log(stack)*/
//---------------------------------------------------------------------------
//shift()和unshift()方法--
//shift()删除原数组最后一项，并返回删除元素的值，数组为空则返回"undefined"。
//unshift()将参数添加到原数组开头，并返回数组的长度。
//var s = arr.shift()
//---------------------------------------------------------------------------
// arr.unshift(1, 2, 3, 4, 5, 4, 4, 3, 12, 34)
// console.log(arr)
//---------------------------------------------------------------------------
//reverse()反转数组的顺序,自身也输出。
//arr.reverse()
//----------------------------------------------------------------------------
//concat(0)方法：将参数添加到原数组之中，先copy一个当前数组，然后将参数添加到copy数组的末尾，返回新构建的数组，如果无参数，返回原数组。
//push()方法不会拆解开参数数组，而concat()会一一拆解放入原数组。
// var arr1 = arr.concat(1, 'zhangsan', 'wangwu')
// console.log(arr1)
//----------------------------------------------------------------------------
//indexOf(), lastIndexOf()方法
//indexOf()是查某个指定的字符串在字符串首次出现的位置（索引值）（从左往右） （使用全等操作符）
//lastIndexOf()是从右向左查某个指定的字符串在字符串中最后一次出现的位置（从右往左）	
//找不到返回"-1"
// var x = arr.lastIndexOf(9)
// console.log(x)
//----------------------------------------------------------------------------
//-----------------函数------------------------------------------------
//第一种直接函数申明：function name1(){}2.第二种函数表达式申明：var name2 = function () {}3.第三种Function构造函数申明：var name3 = new Function ()//
//javascript解析器会把当前作用域的函数提前到 整个作用域的最前面。（表达式申明不会）（1.2区别）
//形参的个数和实参的个数可以不相等----多余的形参不运算，缺失的当做undefined.number+undefined=NaN
//arguments表示传入函数的所有对象--包含length属性，类似于数组，但不包括数组的所有属性。
//匿名函数:没有命名的函数：比如绑定事件：document.click = function(){}。--比如定时器：setInterval(function(){},1000);--比如自调用函数(function(){alert("hello!")})();
//回调函数，
// function add(num1, num2) {// 	return num1 + num2;// }// function jian(num1, num2) {// 	return num1 - num2;// }// function chen(num1, num2) {// 	return num1 * num2;// }// function chu(num1, num2) {// 	return num1 / num2;// }// function cal(num1, num2, func) {// 	return func(num1, num2);// }// console.log(cal(1, 2, add))
function Fibonaic(n) {
	if (n == 1 || n == 0) return 1;
	return Fibonaic(n - 1) + Fibonaic(n - 2);
}

function sum(n) {
	if (n == 0) return 0
	return n + sum(n - 1);
}
//onsole.log(sum(100))
//1,3,6,10,15,21
function name() {
	//var na = "nihao";
	na = "nihao";
}
name();
//console.log(na)

/*var n = 20;
suc();
function suc() {
	console.log(n)
	var n = 50;
// }*/

// f1();// console.log(c);// console.log(b);// console.log(a);// function f1() {// 	var a = b = c = 9;//a是局部变量，b,c是全局变量// 	console.log(a);// 	console.log(b);// 	console.log(c);// }
/*function person(params) {
	this.name = params.name;
	this.age = params.age;
	this.xinbie = params.xinbie;
	this.action = function (something) {
		console.log(this.name + "在" + something);
	}
}
var liming = new person({
	name: "liming",
	age: 18,
	xinbie: "男",
	something: "唱歌"
})
liming.action()*/
/*function Dog(params) {
	this._init(params);
}
Dog.prototype = {
	_init: function (params) {
		this.name = params.name;
		this.age = params.age;
		this.Boyfriends = params.Boyfriends;
	},
	eat: function () {
		console.log(this.name + this.age)
	}
}
var smalldog = new Dog({
	name: "李明",
	age: 18
})
smalldog.eat()*/
//---------数组API方法-------------//
//1.sort(),2.silce(),3.splice()4.Foreach()5.map()6.filter()7.every()8.some()
var arr = [10, 9, 8, 7, 6, 5, 152, 88, -8]
/*console.log(arr.sort(function (a, b) {
	return a - b
})) //升序排列数组
console.log(arr.sort(function (a, b) {
	return b - a
}))*/ //降序排列数组（内部为冒泡排序）
//console.log(arr.slice()) //包含首项不包含尾项，指定位置往后输出
//console.log(arr.splice()) //1.删除(下标，个数)2.插入：(起始位置，删除的项数，插入的项)3.替换：()
/*arr.forEach(function (value, index) {
	console.log(index + ":" + value)
});*/
/*console.log(arr.map(function (value, index) {
	return value * value
}))*/ //映射
//过滤filter()
/*console.log(arr.filter(function (value, index) {
	return value < 0
}))*/
/*console.log(arr.every(function (value, index) {
	return value > 0 || value < 0
<<<<<<< HEAD
}))*/
=======
}))*/
//.parentNode获取父节点(唯一)可以存在a.parentNode.parentNode.....
//chrome bad!!!//
>>>>>>> d2851eefaf04e4efe95c6005affd6201dce51b1d
