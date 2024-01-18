/*
Krxk Module
*/
export function DisplayInfo() {
    console.log(`Krxk Module`)
}

export const special = `Special`

const defaultTool = `default-tools`

export default defaultTool; /*不需要大括号， 默认导出是模块唯一的*/

export { name as childName } from './Child.js' /*导入后导出，此方法可用于合并多个子模块，简化依赖关系管理*/