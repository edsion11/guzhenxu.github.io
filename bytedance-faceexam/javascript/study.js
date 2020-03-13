//--------------------------------study记录---------------------------------------------
//-----------------------------------1.数组---------------------------------------
// !(7 < 3) && console.log("hello")// console.log(!522)// console.log(Boolean(500))
var arr = new Array(9, 12, 23, 14, 5, 100, 9, 2, 4, 1, 2, 9)
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
//shift()删除原数组first项，并返回删除元素的值，数组为空则返回"undefined"。
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
//---------数组API方法-------------//
//1.sort()排序,2.silce()往后,3.splice()删除，插入，替换4.Foreach()遍历5.map()映射6.filter()
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
<<<<<<< HEAD
}))*/
/*console.log(arr.filter(function (value, index) {
	return value < 0
}))*/
/*console.log(arr.map(function (value, index) {
	return value * value
}))*/ //降序排列数组（内部为冒泡排序） //映射 //console.log(arr.slice()) //包含首项不包含尾项，指定位置往后输出 //过滤filter() //console.log(arr.splice()) //1.删除(下标，个数)2.插入：(起始位置，删除的项数，插入的项)3.替换：() //.parentNode获取父节点(唯一)可以存在a.parentNode.parentNode..... //-------替换字符串中的空格
/*console.log(arr.sort(function (a, b) {
	return a - b
})) //升序排列数组
console.log(arr.sort(function (a, b) {
	return b - a
}))*/
/*function replaceSpace(str)
{
    return  resStr = str.replace(/ /g, "%20");
}*/
/*把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。*/
//1.直接排序2.二分法(待添加)
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
//------------------------------------------------------------------
//输入一个整数，求他的二进制编码，以及101的个数和第一个101的下标
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
//--------------------------------------------------
//leetcode-5----最长回文子字符串-----------------------
//遍历法----超时---555555555555
function longestPalindrome(s) {
	if (s.split('').join('') == s.split('').reverse().join('')) return s
	var sta = new Array() //栈push和shift
	for (var i = 0; i < s.length; i++) {
		sta.push(s[i])
	}
	var maxlen = 0
	var max = ""
	for (let j = 0; j < s.length; j++) {
		for (let i = 0; i < s.length - 1; i++) {
			//console.log( (s.slice(j, i + 2))
			var arr1 = s.slice(j, i + 2).split('')
			var arrm = arr1.join('')
			var arrn = arr1.reverse().join('')
			if (arrm == arrn && arrm.length > maxlen) {
				maxlen = arrm.length
				max = arrm
			}
		}
	}
	return max
}
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))

/* 	function Stack() {
		this.dataStore = []
		this.push = push;
		this.pop = pop;
		this.top = 0
		this.length = length
	}

	function length() {
		return this.top
	}

	function push(element) {
		this.dataStore[this.top++] = element
	}

	function pop(element) {
		return this.dataStore[--this.top];
	} */