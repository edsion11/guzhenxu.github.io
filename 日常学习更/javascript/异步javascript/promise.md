### 如何改变 promise 的状态

```javascript
resolve(value)//---pedding->fullfilled
reject(reason)//---pedding->rejected
throw //抛出异常，rejected，reason为throw的值
```

定义两个 then()，都会输出

promise 状态的改变和 then 回调函数的执行

```javascript
//先指定回调函数，在改变状态
new Promise((resolve, reject) => {
  //这里是同步执行
  console.log`先指定回调函数，在改变状态`
  setTimeout(() => {
    resolve(1) //再改变pedding状态，同时改变数据
  }, 1000)
}).then((value) => {
  //先指定回调函数
  console.log('value1---->' + value)
})
//先改变状态，再指定函数
//第一种，去掉异步的定时器
new Promise((resolve, reject) => {
  console.log`//先改变状态，再指定函数`
  resolve(2)
}).then((value) => {
  console.log('value2--->' + value)
})
//第二种都设置定时器
const p3 = new Promise((resolve, reject) => {
  console.log`//先改变状态，再指定函数`
  setTimeout(() => {
    resolve(3)
  }, 1000)
})
setTimeout(() => {
  p3.then((value) => {
    console.log('value3--->' + value)
  })
}, 1200)
```

