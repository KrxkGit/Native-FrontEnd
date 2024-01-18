/* 将两个模块的功能合并 */
import { childName, DisplayInfo, special} from "./KrxkInfo.js";/*此导入方法可自动转换命名空间，但可能容易出现命名冲突问题*/
import defaultTool from "./KrxkInfo.js"; /* 不需要 大括号， 因为默认导出是模块唯一的*/
import { calculateName, DisplayInfo as CalculateDisplayInfo } from "./Calculate.js"; /*导入时重命名避免冲突*/
import * as Common from './Common.js' /* 此导入方法可以获得独立命名空间，更好地解决命名冲突问题 */

function DisplayKrxk() {
    DisplayInfo()
}

function DisplayCalculate() {
   CalculateDisplayInfo()
}

function DisplayCommon() {
    Common.DisplayInfo()
}

console.log(special)
console.log(defaultTool)
console.log(calculateName)
console.log(Common.name)
console.log(childName)

DisplayKrxk()
DisplayCalculate()
DisplayCommon()

/* 延迟加载. import 返回一个 Promise 对象 */
import ('./Dynamic.js').then((dynamic) => {
    dynamic.DisplayDynamic()
}).catch((err) => {
    console.error(err)
})