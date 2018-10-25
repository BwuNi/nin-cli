"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mkdir_1 = require("./mkdir");
const isfile_1 = require("./isfile");
const isdir_1 = require("./isdir");
const readdir_1 = require("./readdir");
const copyfile_1 = require("./copyfile");
exports.default = {
    readdir: readdir_1.default,
    mkdir: mkdir_1.default,
    isdir: isdir_1.default,
    isfile: isfile_1.default,
    copyfile: copyfile_1.default
};
//# sourceMappingURL=index.js.map