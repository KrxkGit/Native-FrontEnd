const objectBox = document.querySelector('#Object-box')

let para = document.createElement('p')
function testThis(name) {
    console.log(name)
    console.log(this) /*此处 this 指向 window 全局对象*/
    para.textContent = this.name
    objectBox.appendChild(para)
}

testThis('Hello')
console.log(testThis.prototype) /* 函数的原型 为 constructor, __proto__(Object)*/

function createPerson(name) { /*工厂函数方法*/
    const obj = {}
    obj.name = name
    obj.introduceSelf = function () {
        console.log(`你好！我是${this.name}`)
    }
    return obj
}

let krxk1 = createPerson('Krxk')
krxk1.introduceSelf()
console.log(krxk1)
console.log(createPerson.prototype)

function Person(name) { /*构造函数方法*/
    this.name = name
    this.introduceSelf = function () {
        console.log(`你好！我是${this.name}`)
    }
}

/*调用时会将对象的__proto__设为 Person 的 __proto__*/
const krxk2 = new Person('krxk2')
krxk2.introduceSelf()
console.log(Person.prototype)
console.log(Object.getPrototypeOf(krxk2))

const myObj = {
    city: 'Guangzhou',
    greet() {
        console.log(`Hello,I'm from ${this.city}`)
    }
}

myObj.greet()
console.log(myObj)
console.log(Object.getPrototypeOf(myObj))

myDate = new Date()
let object = myDate
console.log('原型')
do {
    object = Object.getPrototypeOf(object)
    console.log(object)
} while (object)

krxk3 = new Person('krxk3')
krxk3.introduceSelf()
console.log(krxk2.introduceSelf === krxk3.introduceSelf) /*false 来自不同函数*/
console.log(Object.getPrototypeOf(krxk2) === Object.getPrototypeOf(krxk3)) /*true.
原型是一个对象引用，为以该原型创建的对象所共享。访问时，先从对象属性中搜索，若找不到，继续在原型中搜索，以此形成搜索链。若最终无法找到，返回
undefined*/
console.log(krxk3['abc'] === undefined) /*true*/

const starPrototype = {
    show() {
        console.log(`星空：${this.num}`)
    }
}

function Star(num) {
    this.num = num
}

const star0 = Object.create(starPrototype)
star0.show() /*输出 undefined*/
star0.num = 0
star0.show()

Object.assign(Star.prototype, starPrototype) /* 对象合并，将源对象可枚举属性拷贝到目标对象内 */
// Star.prototype = starPrototype /* 覆盖属性 */

const star1 = new Star(1)
star1.show()

console.log('自有属性')
console.log(Object.hasOwn(krxk2, 'name'))
console.log(Object.hasOwn(krxk2, 'introduceSelf'))
console.log(Object.hasOwn(star1,'abc'))
console.log(Object.hasOwn(star1,'num'))
console.log(Object.hasOwn(star1, 'show'))

const star2 = new Star(2)
star2.show()
console.log(star1.show === star2.show) /*true，来自同一函数*/

/*总结：对象将另一个对象的引用保存在 __proto__ 中，构成原型链*/