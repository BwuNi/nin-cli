"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = (path) => new Promise((res, rej) => {
    fs.stat(path, (e, stat) => {
        if (e)
            rej(e);
        else
            res(stat.isDirectory());
    });
});
//# sourceMappingURL=isdir.js.map