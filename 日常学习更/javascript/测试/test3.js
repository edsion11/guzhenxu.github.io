//.实现类的私有属性（js中等）
/**
* 私有属性已进入ECMAScript提案，请写出你认为合理的提案实现
* const person = new Person('Tom');
* assert.equal(person.getName(), 'Tom');
* assert.equal(Object.keys(person).every((key) => key === 'getName'), true)
* 注意：不要采用闭包实现
*/

const person = new Person('Tom');
assert.equal(person.getName(), 'Tom');
assert.equal(Object.keys(person).every((key) => key === 'getName'), true)
class Person {
// 请实现私有属性name

}
