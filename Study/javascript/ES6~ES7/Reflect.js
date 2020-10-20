class Account{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    get contact(){
        return `${this.name}‘s email is ${this.email}`
    }
}
let args = ['liming','liming@163.com']
let myAccount = Reflect.construct(Account,args)
console.log(myAccount.contact)
console.log(Reflect.has(Account,'name'))
console.log(Reflect.ownKeys(myAccount))
console.log(myAccount)
