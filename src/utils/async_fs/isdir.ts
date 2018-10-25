import * as fs from 'fs'

export default (path:string) => new Promise((res,rej)=>{
    fs.stat(path,(e,stat)=>{
        if(e) rej(e)
        else res(stat.isDirectory())
    })
})