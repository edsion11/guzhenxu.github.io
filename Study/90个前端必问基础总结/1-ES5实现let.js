;(function f1() {
  for (var i = 0; i < 5; i++) {
    console.log('我是f1的for循环,此时i是' + i)
  }
  console.log('f1循环后的i是' + i)
})()
;(function f2() {
  let i //不写这一句会报错
  for (let i = 0; i < 5; i++) {
    console.log('我是f2的for循环,此时i是' + i)
  }
  console.log('f2循环后的i是' + i)
})()

//ES5实现let
/**
 *@params i
 */
for (let _i = 0; _i < 5; _i++) {
  console.log(_i)
}
console.log(i)
