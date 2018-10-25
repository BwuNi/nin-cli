"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_fs_1 = require("./async_fs");
const path = require("path");
exports.default = {
    file: copyFile,
    dir: copyDir
};
function copyFile(target, origin, name) {
    return __awaiter(this, void 0, void 0, function* () {
        yield async_fs_1.default.copyfile(origin, path.resolve(target, name));
    });
}
function copyDir(target, origin, name) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield async_fs_1.default.isdir(origin)))
            return false;
        const list = yield async_fs_1.default.readdir(origin);
        const targetPath = path.resolve(target, './' + name);
        yield async_fs_1.default.mkdir(targetPath);
        yield Promise.all(list.map(function (v) {
            return __awaiter(this, void 0, void 0, function* () {
                const neworigin = path.resolve(origin, './' + v);
                if (yield async_fs_1.default.isdir(neworigin)) {
                    return yield copyDir(targetPath, neworigin, v);
                }
                else if (yield async_fs_1.default.isfile(neworigin)) {
                    return yield copyFile(targetPath, neworigin, v);
                }
            });
        }));
        return true;
    });
}
//# sourceMappingURL=copy.js.map