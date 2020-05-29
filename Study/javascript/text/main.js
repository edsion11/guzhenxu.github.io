function insertAfter(newElement, targetElement) {
  //?原生js写个向后插入节点的函数，
  var parent = targetElement.parentNode
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
function read(name) {
  //?读取函数
  let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === 'file:' ? 0 : 200
  xhr.open('GET', name, false)
  xhr.overrideMimeType('text/html;charset=utf-8') //默认为utf-8
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}
