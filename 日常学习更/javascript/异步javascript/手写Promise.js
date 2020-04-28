/* 
自定义Promise
*/

function Promise(excutor) {
  this.status = 'pending'
  this.data = undefined
  this.callbacks = []
  //resolve函数
  function resolve(value) {
    if (this.status == 'pending') {
      this.status = 'fullfilled'
      this.data = value
      if (this.callbacks.length != 0) {
        setTimeout(() => {
          this.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value)
          })
        })
      }
    } else {
      return
    }
  }
  function reject(reason) {
    if (this.status !== 'rejected') {
      return
    }
    this.status = 'rejected'
    this.data = value
    if (this.callbacks.length != 0) {
      setTimeout(() => {
        this.callbacks.forEach((callbacksObj) => {
          callbacksObj.onResolved(reason)
        })
      })
    }
  }
  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}
Promise.prototype.then = function (onResolved, onRejected) {}
Promise.prototype.catch = function (onRejected) {}
Promise.resolve = function (value) {}
Promise.reject = function (reason) {}
Promise.all = function (arr) {}
Promise.race = function () {}

//向外暴露promise
