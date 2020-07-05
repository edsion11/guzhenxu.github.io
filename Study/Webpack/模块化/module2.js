;(function (window) {
  var name = 'Jack'
  var sex = 'Boy'
  function tell() {
    console.log('我是', name)
    console.log('我的性别是', sex)
  }
  window.module1 = { tell }
})(window)
