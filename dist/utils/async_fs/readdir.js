"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = (path) => new Promise((res, rej) => {
    fs.readdir(path, (e, list) => {
        if (e)
            rej(e);
        else
            res(list);
    });
});
//# sourceMappingURL=readdir.js.map