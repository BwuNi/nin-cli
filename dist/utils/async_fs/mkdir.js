"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = (targetPath) => new Promise((res, rej) => {
    fs.mkdir(targetPath, (e) => {
        if (e)
            rej(e);
        else
            res(targetPath);
    });
});
//# sourceMappingURL=mkdir.js.map