  let car = {}
  let val = 4000;
  Object.defineProperty(car,'price',{
    enumerable:true,
    configurable:true,
    get(){
        console.log("price has be read")
        return val
    },
    set(newVal){
        console.log("price has changed")
        val= newVal
    }
  })
console.log(car.price)
console.log("--------------------------------------")
car.price = 6000;
console.log(car.price)