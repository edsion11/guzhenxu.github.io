new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
    //reject(1)
  }, 0)
}).then((value) => {
  console.log('successful!' + value)
})
Promise.resolve(1).then((value) => {
  console.log(value)
})
Promise.reject(2).then(null, (r) => {
  console.log(r)
})
new Promise((resolve) => {
  resolve(3)
}).then((value) => {
  console.log(value)
})

