//--------------------------------study记录---------------------------------------------
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
//函数