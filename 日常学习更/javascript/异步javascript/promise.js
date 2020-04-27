const p = new Promise((resolve, reject) => {
  console.log`创建好了promise对象`
  /*setTimeout(() => {
    console.log(new Date())
    resolve(new Date())
  }, 1000)*/
  resolve(new Date().getHours())
})
p.then(console.log)
console.log`走你`
setTimeout(() => {
  //setTimeout函数本身就是一个异步执行函数
  console.log('settimeout')
}, 2000)
console.log('我是setTimeout后面的log()')
