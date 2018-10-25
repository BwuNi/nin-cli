import * as fs from "fs"

export default (targetPath: string) => new Promise((res, rej) => {
    fs.mkdir(targetPath, (e) => {
        if(e) rej(e)
        else res(targetPath)
    })
})