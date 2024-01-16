/*同步操作*/
function syncDoStep1(init) {
    return init + 1
}
function syncDoStep2(init) {
    return init + 2
}
function syncDoStep3(init) {
    return init + 3
}

function syncDoOperation() {
    let result = 0
    result = syncDoStep1(result)
    result = syncDoStep2(result)
    result = syncDoStep3(result)
    console.log(`Sync result is ${result}`)
}

syncDoOperation()

/*回调*/
/*注意： 与 匿名函数 function 中this可能指向window不同， 箭头函数的this 是绑定于词法作用于的，即始终指向外层对象 */

function cbDoStep1(init, callback) {
    const result = init + 1 /*作出处理*/
    let r = callback(result) /*处理完毕后回调*/
    return r /*再次依赖于回调处理程序的输出结果*/
}
function cbDoStep2(init, callback) {
    const result = init + 2
    return  callback(result)
}
function cbDoStep3(init, callback) {
    const result = init + 3
    return  callback(result)
}

function cbDoOperation() {
    let r = cbDoStep1(0, (result1) => {
        return cbDoStep2(result1, (result2) => {
            return cbDoStep3(result2, (result3) => {
                console.log(`Callback result is ${result3}`)
                return result3 /*回调处理程序输出结果*/
            })
        })
    })
    console.log(`r is ${r}`)
}

cbDoOperation()