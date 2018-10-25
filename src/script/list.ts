import list from '../template/index'



let liststr = `Template List :`

let li: string[] = []

let index = 0

for (let i in list) {
    liststr += `
    ${++index} : ${i}`
    li[index] = list[i]
}


export default async function lis() {
    console.log(liststr)
}