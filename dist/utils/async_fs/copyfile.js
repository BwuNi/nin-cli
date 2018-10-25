"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = (src, dest) => new Promise((res, rej) => {
    fs.copyFile(src, dest, e => {
        if (e)
            rej(e);
        else
            res();
    });
});
//# sourceMappingURL=copyfile.js.map