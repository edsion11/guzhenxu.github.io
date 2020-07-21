//web开发中，因为浏览器之间的实现差异，一些嗅探工作必不可免。
var addEvent = function (elem,type,handler) {
    if(window.addEventListener){
        addEvent = function (elem,type,handler) {
            elem.addEventListener(type,handler,false)
        }
    }
    if(window.attachEvent){
        addEvent = function (elem,type,handler) {
            elem.attachEvent("on"+type,handler)
        }
    }
    addEvent(elem,type,handler)
}
