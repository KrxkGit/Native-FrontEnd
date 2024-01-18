/*计算模块*/

const name = 'Calculate'

function DisplayInfo() {
    console.log(`Calculate Module`)
}

export { name as calculateName, DisplayInfo } /*as 语法可以指定导出时重命名，也可一定程度上避免命名冲突*/