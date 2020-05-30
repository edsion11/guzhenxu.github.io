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
    //绑定this
    const that = this
    //value传递
    onResolved =
      typeof onResolved === 'function' ? onResolved : (value) => value

    //指定默认的失败的回调，实现异常穿透
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason //不能return,要传递失败的状态
          }

    //that.callbacks.push({ onResolved, onRejected })
    return new myPromise((resolve, reject) => {
      function handle(callback) {
        try {
          const result = callback(that.data)
          if (result instanceof Promise) {
            result.then(
              (value) => resolve(value),
              (reason) => reject(reason)
            )
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      if (that.status === 'pending') {
        that.callbacks.push({
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          },
        })
      } else if (that.status === 'fullFilled') {
        setTimeout(() => {
          handle(onResolved)
        })
      } else {
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }

  myPromise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }
  /* 
  const p1 = Promise.resolve(2)
  const p2 = Promise.resolve(Promise.resolve(3))
  const p3 = Promise.resolve(Promise.reject(4))
  p1.then((value) => {
    console.log('p1', value)
  })
  p2.then((value) => {
    console.log('p2', value)
  })
  p3.catch((reason) => {
    console.log('p3', reason)
  }) */
  myPromise.resolve = function (value) {
    return new myPromise((resolve, reject) => {
      if (value instanceof myPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }
  myPromise.reject = function (reason) {
    return new myPromise((resolve, reject) => {
      reject(reason)
    })
  }
  myPromise.all = function (arr) {
    return new myPromise((resolve, reject) => {
      var sum = 0 //成功Promise的数量
      var resultArr = new Array(arr.length) //用来保存所有成功数据的数组
      arr.forEach((p, index) => {
        myPromise.resolve(p).then(
          (value) => {
            resultArr[index] = value
            sum++
            if (sum === arr.length) {
              resolve(resultArr)
            }
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }
  myPromise.race = function (arr) {
    //看谁最先完成。
    return new Promise((resolve, reject) => {
      arr.forEach((p, index) => {
        myPromise.resolve(p).then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }
  myPromise.resolveDelay = function (value, time) {
    return new myPromise((resolve, reject) => {
      setTimeout(() => {
        if (value instanceof myPromise) {
          value.then(resolve, reject)
        } else {
          resolve(value)
        }
      }, time)
    })
  }
  myPromise.rejectDelay = function (reason, reason) {
    return new myPromise((resolve, reject) => {
      setTimeout(() => {
        reject(reason)
      }, time)
    })
  }
  //向外暴露Promise函数
  window.myPromise = myPromise
})(window)

//向外暴露promise
