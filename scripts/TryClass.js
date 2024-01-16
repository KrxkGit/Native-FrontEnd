/*类的底层基于原型实现*/
class Tree {
    name /*可选，因为构造函数调用时将自动创建。但列出更利于阅读*/

    constructor(name) { /*无参构造函数可省略*/
        this.name = name
    }

    introduceSelf() {
        console.log(`Hello.I'm ${this.name}.`)
    }
}

const tree = new Tree('Tree0')
tree.introduceSelf()

class AppleTree extends Tree {
    name = 'apple'
    #appleNum /*私有属性*/
    _appleProtect /*保护属性*/
    apple() {
        console.log('I\'m apple.')
    }
    introduceSelf() {
        // super.introduceSelf();
        console.log(`override: ${this.name}`)
    }
    setAppleNum(num) {
        this.#appleNum = num
    }
    getAppleNum() {
        return this.#appleNum
    }
    get appleProtect() {
        console.log('get')
        return this._appleProtect
    }
    set appleProtect(num) {
        console.log('set')
        this._appleProtect = num
    }
}

appleTree = new AppleTree(2)
appleTree.introduceSelf()
appleTree.apple()

appleTree.setAppleNum(10)
console.log(appleTree)
console.log(appleTree.getAppleNum())

appleTree.appleProtect = 5
console.log((appleTree.appleProtect))

let jsonStr = JSON.stringify(appleTree)
console.log(jsonStr)
let parJsonObj = JSON.parse(jsonStr)
console.log(parJsonObj)
parJsonObj.prototype = Object.getPrototypeOf(appleTree)
console.log(parJsonObj)
parJsonObj.introduceSelf()

