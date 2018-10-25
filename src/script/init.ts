import std from '../utils/async_std'
import copy from '../utils/copy'
import * as path from 'path'
import list from '../template/index'



let liststr = `Template List :`

let li: string[] = []

let index = 0

for (let i in list) {
    liststr += `
    ${++index} : ${i}`
    li[index] = list[i]
}

liststr += `
Choose Template (enter index): `

export default async function init() {

    const name = (await std.question('Project Name: ')).trim()

    const index = (await std.question(liststr)).trim()

    const template = li[parseInt(index)]

    const origin = path.resolve(__dirname,'../',template)

    const target = process.cwd()

    copy.dir(target,origin,name)

    std.close()
}