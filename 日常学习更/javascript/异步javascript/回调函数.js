function f1(func) {
  setTimeout(() => {
    console.log('我是f1')
    for (let i = 1; i < 50000; i++) {
      console.log('我是f1的' + i)
    }
    func()
  }, 500)
}
function f2() {
  alert('我是f2')
}

function f3() {
  alert('我是f3')
}
f1(f2)
//f2()
f3()
