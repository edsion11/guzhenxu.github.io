/* 
自定义Promise
*/
;(function (window) {
  function myPromise(executor) {
    const that = this
    that.status = 'pending'
    that.data = undefined
    that.callbacks = [] //每个元素的结构：{onRejected() {},onResolved() {}}
    //resolve函数
    function resolve(value) {
      if (that.status !== 'pending') {
        return
      }
      that.status = 'fullFilled'
      that.data = value
      if (that.callbacks.length != 0) {
        setTimeout(() => {
          that.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value)
          })
        })
      }
    }
    function reject(reason) {
      if (that.status !== 'pending') {
        return
      }
      that.status = 'rejected'
      that.data = reason
      console.log('此时执行到reject()函数内部，Promise状态为: ' + that.status)
      if (that.callbacks.length != 0) {
        setTimeout(() => {
          console.log('此时执行到reject()函数内部的setTimeout()内部')
          that.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(reason)
          })
        })
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  myPromise.prototype.then = function (onResolved, onRejected) {
    const that = this
    that.callbacks.push({ onResolved, onRejected })
  }
  myPromise.prototype.catch = function (onRejected) {}
  myPromise.resolve = function (value) {}
  myPromise.reject = function (reason) {}
  myPromise.all = function (arr) {}
  myPromise.race = function () {}
  //向外暴露Promise函数
  window.myPromise = myPromise
})(window)

//向外暴露promise
