/*var arr = [4, 3, 6, 8, 15]

function fnc(arr) {
  var min = Math.abs(arr[1] - arr[0])
  //console.log(min)
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length - i; j++) {
      if (Math.abs(arr[j] - arr[i]) < min)
        min = Math.abs(arr[j] - arr[i])
    }
  }
  return min
}
//console.log(fnc(arr))
const {log} = console
let start = function(){
  this.a=1;
  this.b=2
}
let star = new start()
log(star)
let st = Object.create(star)
log("st:"+st.a)
star.a=3
log("st:"+st.a)
*/
function deepClone(obj){
  var objclone = Array.isArray(obj)?[]:{}
  if(obj&&typeof obj==="object"){
      for(key in obj){
          if(obj.hasOwnProperty(key)){
              if(obj[key]&&typeof obj[key]==="object"){
                  obj[key] = deepClone(obj[key])
              }else{
                  objclone[key] = obj[key]
              }
          }
      }
  }
  return objclone
}
var person={
  a:2,
  b:12,
  c:24
}
const {log} = console
var per = deepClone(person)//深拷贝
var p = Object.create(person)//浅拷贝
var pp = JSON.parse(JSON.stringify(person))//JSON方法深拷贝s
log("原对象"+person.a,person.b,person.c)
log("Object.create拷贝对象"+p.a,p.b,p.c)
log("深拷贝对象"+per.a,per.b,per.c)
log("JSON:"+pp.a,pp.b,pp.c)
person.a=23
log("修改后的原对象"+person.a,person.b,person.c)
log("修改原对象后Object.create拷贝对象"+p.a,p.b,p.c)
log("修改原对象后的深拷贝"+per.a,per.b,per.c)
//JSON方法实现深拷贝
log("修改原对象后的JSON数据"+pp.a,pp.b,pp.c)