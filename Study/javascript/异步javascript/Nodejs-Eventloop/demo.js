/* setTimeout(() => {
  console.log('setTimeout 1')

  Promise.resolve().then((res) => {
    console.log('Promise')
  })
  setTimeout(() => {
    console.log('wuwuwu')
  })
})
setTimeout(() => {
  console.log('setTimeout 2')
})
 */
////
//const fs = require('fs')
//console.log('start')
//setTimeout(() => {
//  console.log('setTimeout 1')
//}, 0)
//setImmediate(() => {
//  console.log('setImmediate')
//})
//fs.readFile(__filename, () => {
//  setTimeout(() => {
//    console.log('readFile setTimeout')
//  }, 0)
//  setImmediate(() => {
//    console.log('readFile setImmediate')
//  })
//  process.nextTick(() => console.log('readFile NEXt Tick'))
//})
//Promise.resolve().then(() => {
//  console.log('promise')
//  process.nextTick(() => console.log('Promise Next Tick'))
//})
//process.nextTick(() => console.log('Next Tick'))
//setTimeout(() => {
//  console.log('setTimeout 2')
//}, 0)
//console.log('END')
//
//
/* const fs = require('fs')

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback)
}

const timeoutScheduled = Date.now()

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled

  console.log(`${delay}ms have passed since I was scheduled`)
}, 100)

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now()

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
})
 */

process.nextTick(function () {
  console.log(1)
  setImmediate(function () {
    console.log(2)
  })
})
setImmediate(function () {
  console.log(3)
  process.nextTick(function () {
    console.log(4)
  })
})
