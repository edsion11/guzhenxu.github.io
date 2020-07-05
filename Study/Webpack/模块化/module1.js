;(function (window) {
  var name = 'Susan'
  var sex = 'Girl'
  function tell() {
    console.log('我是', name)
    console.log('我的性别是', sex)
  }
  window.module2 = { tell }
})(window)

