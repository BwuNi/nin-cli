import afs from "./async_fs"
import * as path from "path"


export default {
    file: copyFile,
    dir: copyDir
}

async function  copyFile(
    target: string,
    origin: string,
    name: string) {
    await afs.copyfile(origin,path.resolve(target,name))
}

async function copyDir(
    target: string,
    origin: string,
    name: string) {
    
    // 判断是否为文件夹，并读取列表
    if (! await afs.isdir(origin)) return false
    const list = await afs.readdir(origin)

    // 新建文件夹
    const targetPath = path.resolve(target, './' + name)
    await afs.mkdir(targetPath); 

    // 复制文件
    await Promise.all(list.map(async function(v:string){
        const neworigin = path.resolve(origin, './' + v)

        // 如果为文件夹，递归调用
        if(await afs.isdir(neworigin)) {
            return await copyDir(
                targetPath,
                neworigin,
                v
            )
        }
        // 如果为文件，复制文件
        else if(await afs.isfile(neworigin)){
            return await copyFile(
                targetPath,
                neworigin,
                v
            )       
        }
    }))

    return true
}