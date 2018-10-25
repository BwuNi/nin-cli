import * as readline from 'readline'


let rl: readline.ReadLine | null = null

export default {
    question: (str: string) => new Promise(( res:(str:string)=>void,rej) => {
        if (!rl) {
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
        }

        rl.question(str, answer => {
            res(answer)
        })

    }),
    close: () => {
        if (rl) {
            rl.close();
            rl = null
        }
    }
}