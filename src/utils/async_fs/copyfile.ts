import * as fs from 'fs'

export default (src :string,dest:string) => new Promise((res,rej)=>{
    fs.copyFile(src,dest,e=>{
        if(e) rej(e)
        else res()
    })
})