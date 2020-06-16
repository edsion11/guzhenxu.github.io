//--------------------------------study记录---------------------------------------------
//?-----------------------------------1.数组---------------------------------------
// !(7 < 3) && console.log("hello")// console.log(!522)// console.log(Boolean(500))
var arr = new Array(9, 12, 23, 14, 5, 100, 9, 2, 4, 1, 2, 9)
//----------------------------------------------------------------------------
//? join(separator)方法：将数组的元素组起一个字符串，以separator为分隔符，省略的话为默认","
// ?var arr1 = arr.join("|");
//--------------------------------------------------------------------------
//?push(),pop()入栈与出栈，
//?push()接受任意数量的参数，把他们逐个添加到数组末尾，并返回修改后数组的长度
//?pop()数组末尾移除最后一项，减少数组的length值，然后返回移除的项
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
//??shift()删除原数组first项，并返回删除元素的值，数组为空则返回"undefined"。
//??unshift()将参数添加到原数组开头，并返回数组的长度。
//?var s = arr.shift()
//?---------------------------------------------------------------------------
//? arr.unshift(1, 2, 3, 4, 5, 4, 4, 3, 12, 34)
//? console.log(arr)
//?---------------------------------------------------------------------------
//?reverse()反转数组的顺序,自身也输出。
//?arr.reverse()
//?----------------------------------------------------------------------------
//?concat(0)方法：将参数添加到原数组之中，先copy一个当前数组，然后将参数添加到copy数组的末尾，返回新构建的数组，如果无参数，返回原数组。
//?push()方法不会拆解开参数数组，而concat()会一一拆解放入原数组。
//? var arr1 = arr.concat(1, 'zhangsan', 'wangwu')
//? console.log(arr1)
//?----------------------------------------------------------------------------
//?indexOf(), lastIndexOf()方法
//?indexOf()是查某个指定的字符串在字符串首次出现的位置（索引值）（从左往右） （使用全等操作符）
//?lastIndexOf()是从右向左查某个指定的字符串在字符串中最后一次出现的位置（从右往左）
//?找不到返回"-1"
//? var x = arr.lastIndexOf(9)
//? console.log(x)
//!---------------------------------------------------------------------------------------------------------------------------------------
//?------------------------------------------------函数----------------------------------------------------------------------------------------
//?!-----------------------------------------------------------------------------------------------------------------------------------
//!注意：关于函数作用域的声明提前，在函数内一开始先声明所有局部变量，但到var的时候才正式赋值。初始值为undefined,到声明语句时赋值。
//!第一种直接函数申明：function name1(){}2.第二种函数表达式申明：var name2 = function () {}3.第三种Function构造函数申明：var name3 = new Function ()//
//!!javascript解析器会把当前作用域的函数提前到 整个作用域的最前面。（表达式申明不会）（1.2区别）
//!形参的个数和实参的个数可以不相等----多余的形参不运算，缺失的当做undefined.number+undefined=NaN
//*调用函数的四种方式：作为函数调用，作为方法调用，作为构造函数调用，通过他们的call和apply调用
//!arguments表示传入函数的所有对象--包含length属性，类似于数组，但不包括数组的所有属性。
//!匿名函数:没有命名的函数：比如绑定事件：document.click = function(){}。--比如定时器：setInterval(function(){},1000);--比如自调用函数(function(){alert("hello!")})();
//!回调函数，
//!---------不定实参函数
function max( /*....*/ ) { //!不定实参函数,不定实参函数的实参个数不能为0，
	var max = Number.NEGATIVE_INFINITY; //!arguments并不是真正的数组，只是个以数字为索引的实参对象
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) max = arguments[i]
	}
	return max
}
//*console.log(max(1, 2, 3))
// function add(num1, num2) {// 	return num1 + num2;// }// function jian(num1, num2) {// 	return num1 - num2;// }// function chen(num1, num2) {// 	return num1 * num2;// }// function chu(num1, num2) {// 	return num1 / num2;// }// function cal(num1, num2, func) {// 	return func(num1, num2);// }// console.log(cal(1, 2, add))
/*function Fibonaic(n) {
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
name();*/
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
//!callee和caller属性
var factorial = function (x) { //*callee()实现函数的阶乘
	if (x <= 1) return 1
	return x * arguments.callee(x - 1)
}
//*console.log(factorial(3))
function isArrayLike(o) {
	if (o && typeof o === "object" && isFinite(o.length) && o.length >= 0 && o.length === Math.floor(o.length) && o.length < 4294967296)
		return true
	else
		return false
}
//*实参类型
function sum(a) {
	if (isArrayLike(a)) {
		var total = 0
		for (var i = 0; i < a.length; i++) {
			var element = a[i]
			if (element == null) continue
			if (isFinite(element)) { //不是无穷大就循环
				total += element
			} else
				console.log("sum():elements must be finite numbers")
		}
		return total
	} else
		console.log("sum(): argument must be array-Like")
}
//*console.log(sum([1, 2, 3, 4, 'hello'])) 
//!自定义函数属性
function facJieChen(n) {
	if (isFinite(n) && n > 0 && n == Math.round(n)) { //有限的正整数
		if (!(n in facJieChen)) //判断是否有缓存结果
			facJieChen[n] = n * facJieChen(n - 1) //计算缓存结果
		return facJieChen[n] //返回缓存结果
	} else return NaN //输入有误
}
facJieChen[1] = 1
//*console.log(facJieChen(3))
//!-------------------------作为命名空间的函数--------------------------//
var extend = (function () { //将这个函数的返回值赋值给extend
	//在修复它之前，首先检查是否存在bug
	for (var p in {
			toString: null
		}) {
		///console.log(p)
		//如果代码执行到这里，那么for/in循环会正确工作并返回一个简单版本的extend()函数
		return function extend(o) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var prop in source) o[prop] = source[prop];
			}
			return o;
		};
	}
	//如果代码执行到这里，说明for/in循环不会枚举测试对象的toString属性
	//因此返回另一个版本的extend()函数，这个函数显式测试
	//Object.prototype中的不可枚举属性
	return function patched_extend(o) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			//复制所有的可枚举属性
			for (var prop in source) o[prop] = source[prop];
			//现在检查特殊属性
			for (var j = 0; j < protoprops.length; j++) {
				prop = protoprops[j];
				if (source.hasOwnProperty(prop)) o[prop] = source[prop]
			}
		}
		return o;
	};
	var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumrable", "toLocaleString"];

}());

var h = {
	x: 1,
	y: 2,
	z: 3
};
//*var s = extend(h);
//*console.log(s); //Object { x=1,  y=2,  z=3}
//*console.log(s.x); //1
//!--------------------------------------------------闭包-----------------------------------------------//
var scope = "global scope"

function f() {
	var scope = "local scope"

	function f1() {
		console.log(scope)
		return scope //*console.log(this.scope)-->>undefined
	}
	return f1
}
//console.log(f())
//f()()
f = null
var count = 55
var uniqueInteger = (function () {
	var count = 0;

	return function () {
		console.log(++count)
	}
}())
uniqueInteger()
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//!------------------------------------------------数组API方法----------------------------------------------------------------------------//
//!------------------------------------------------------------------------------------------------------------------------------------------------------
//1.sort()排序,2.slice()往后输出,3.splice()删除，插入，替换4.Foreach()遍历5.map()映射6.filter()
//!indexOf和lastIndexOf(),搜寻整个数组中给定值的元素，没有返回-1，lasto从后往前遍历，indexOf从前往后
//!reduce和reduceRight--使用给定的函数将数组元素进行组合，生成单个值，第一个参数是执行函数，第二个是初始值
//过滤7.every()全为true，返回true8.some()有一个为true，返回true遍历数组，返回布尔值，参数有item，index，arr(函数本身)
var arr = [
	10,
	9,
	8,
	7,
	6,
	5,
	152,
	88,
	-8
]
var sum = arr.reduce(function (x, y) { //!利用reduce进行数组去和
	return x + y
}, 0)
/* function fnc(num) {
	if (num == 0) return 0;
	var arr1 = [];
	var i = 0;
	while (!num % 2 == 0) {
		arr1[i] = Math.trunc(num % 2);
		num = Math.trunc(num / 2);
		i++;
	}
	var arr2 = arr1.reverse()
	var count = 0;
	var xiabiao = [];
	var n = 0;
	for (var j = 0; j < arr2.length - 2; j++) {
		if (arr2[j] == 1 && arr2[j + 1] == 0 && arr2[j + 2] == 1) {
			count++;
			xiabiao[n++] = j;
		}
	}
	console.log(xiabiao[0])
	return count
}
console.log(fnc(84)) */
/* function minarr(array){
   for(var i = 1;i<array.length;i++){
       for(var j = 0;j<array.length-i;j++){
           if(array[j]>array[j+1]){
               var temp = array[j];
               array[j] = array[j+1];
               array[j+1] = temp 
           }
       }
   }
    return array[0];
}
console.log(minarr([3,4,5,1,2])) */
/*把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。*/
/*function replaceSpace(str)
{
    return  resStr = str.replace(/ /g, "%20");
}*/
/*console.log(arr.sort(function (a, b) {
	return a - b
})) //升序排列数组
console.log(arr.sort(function (a, b) {
	return b - a
}))*/ //降序排列数组（内部为冒泡排序） //映射 //console.log(arr.slice()) //包含首项不包含尾项，指定位置往后输出 //过滤filter() //console.log(arr.splice()) //1.删除(下标，个数)2.插入：(起始位置，删除的项数，插入的项)3.替换：() //.parentNode获取父节点(唯一)可以存在a.parentNode.parentNode..... //-------替换字符串中的空格 //1.直接排序2.二分法(待添加) //------------------------------------------------------------------ //输入一个整数，求他的二进制编码，以及101的个数和第一个101的下标 //-------------------------------------------------- //leetcode-5----最长回文子字符串----------------------- //遍历法----超时---555555555555
/*function fnc(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
fnc*/
/*arr.forEach(function (value, index) {
	console.log(index + ":" + value)
});*/
/*console.log(arr.every(function (value, index) {
	return value > 0 || value < 0
}))*/
/*console.log(arr.filter(function (value, index) {
	return value < 0
}))*/
/*console.log(arr.map(function (value, index) {
	return value * value
}))*/

var n = 120
//console.log(n.toString(2)) //?转换进制，参数为其他进制数
var n1 = 1234.5678
//console.log(n1.toFixed(1)) //todo会四舍五入
//console.log(n1.toExponential()) //todo指数计数法，参数为小数个数
//console.log(n1.toPrecision(2)) //todo根据有效数字转换为字符串--
var n2 = 'A'
//console.log(typeof (n2))
//console.log(Number(n2))
//console.log(parseInt("aAA", 16))
/* var arr = [2, 2, 2, 2]
//*记join()和toString()
var ss = arr.join('')
console.log(typeof (arr))
console.log(ss)
var aa = ss.valueOf()
console.log('123' + ss + '123')

function local() {
	var ss = "我是local"
	return ss
}
console.log(local())
console.log(ss) */
/* function test() {
	var i = 0
	if (1) {
		var j = 0
		for (var k = 0; k < 10; k++) {
			console.log(k) //todo--k=0~9
		}
		console.log(k) //todo--k=10
	}
	console.log(j) //j=0
}
test() */
/* var a = '123'
var b = new String(a)
console.log(typeof (b))
function outFn() {
	this.num = 10

	function inFn() {
			var num = 100
			console.log(this.num) //输出的结果________
			console.log(num) //输出的结果________
	}
	return inFn
}
outFn()()
var scope = "global scope"

function f() {
	var scope = "local scope"

	function f1() {
			console.log(this.scope)
			console.log(scope)
			return scope //*console.log(this.scope)-->>undefined
	}
	return f1
}
f()() */