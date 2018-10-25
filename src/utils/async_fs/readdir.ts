import * as fs from 'fs'

export default (path: string) => new Promise(
    (
        res: (r: string[]) => void,
        rej
    ) => {
        fs.readdir(path, (e, list) => {
            if (e) rej(e)
            else res(list)
        })
    })