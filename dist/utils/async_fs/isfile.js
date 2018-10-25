"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = (path) => new Promise((res, rej) => {
    fs.stat(path, (e, stat) => {
        if (e)
            res(false);
        else
            res(stat.isFile());
    });
});
//# sourceMappingURL=isfile.js.map