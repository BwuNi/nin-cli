"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
let rl = null;
exports.default = {
    question: (str) => new Promise((res, rej) => {
        if (!rl) {
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        }
        rl.question(str, answer => {
            res(answer);
        });
    }),
    close: () => {
        if (rl) {
            rl.close();
            rl = null;
        }
    }
};
//# sourceMappingURL=index.js.map