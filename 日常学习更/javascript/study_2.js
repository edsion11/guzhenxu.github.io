var grades = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var arr = [];
for (var i = 0; i < grades.length; i++) {
    for (var j = 0; j < grades[i].length; j++) {
        // console.log(grades[i][j]
        arr.push(grades[i][j])
    }
}
//console.log(arr)
//console.log(grades[1].unshift())
var people = ["i", "am", "a", "student"]
//console.log(people.reverse())
function boy() {
    this.x = [];
    this.add = add;
}

function add(data) {
    this.x.push(data);
}
var liming = new boy;
liming.add(18)
//console.log(liming.x)
var num = 18;
//console.log(num.toString())
function list() {
    this.data = []
}
var li = new list;
li.data[0] = 1;
li.data[1] = 2
//console.log(li.data)
//判断回文
function ishuiwen(num) {
    if (num < 0) return false
    return num.toString() == num.toString().split("").reverse().join("");
}
//console.log(ishuiwen(-12321))
//反转整数
function fanzhuan(num) {
    if (num >= 0) {
        return num.toString().split("").reverse().join("")
    } else {
        var s = num.toString().substr(1, num.toString().length)
        //console.log(s)
        return "-" + s.toString().split("").reverse().join("")
    }

}
console.log(fanzhuan(-12223))
/*******************************************************************************************************************************
------------------------------------------------求最长回文子串----------------------------------------------------------------------------------*/
//
/* function longestPalindrome(
	s
) {
	if (
		s.split('').join('') ==
		s
		.split('')
		.reverse()
		.join('')
	)
		return s
	var sta = new Array() //栈push和shift
	for (var i = 0; i < s.length; i++) {
		sta.push(s[i])
	}
	var maxlen = 0
	var max = ''
	for (let j = 0; j < s.length; j++) {
		for (let i = 0; i < s.length - 1; i++) {
			console.log( (s.slice(j, i + 2))
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
} */
//console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))
/*******************************************************************************************************************************
----------------------------------------------------------------------------------------------------------------------------------*/
//这是一道大题目--
//--1.创建一个长度为5的数组
//--2.生成一个2~32的随机数
//--3.将随机数插入到数组arr内，如果数组内存在相同的数，重新生成随机数插入
//--4.输出长度为5，内容不重复的数组
let arr1 = []
//创建全局数组arr1
function fnc(s) {
    if (s > 0) {
        //生成2~32的随机数
        parseInt(Math.random() * 31 + 2, 10) //生成指定区间的随机数parseInt(Math.random()*(max-min+1)+min,10);Math.floor(Math.random()*(max-min+1)+min);
        var rand = Math.floor(Math.random() * 31 + 2)
        //判断是否存在相同的数
        var boolean = arr1.every(function (item) {
            return item != rand
        })
        if (boolean == true) {
            arr1.push(rand)
            return fnc(--s)
        } else {
            return fnc(s)
        }
    } else return arr1
}
//console.log(fnc(5))