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
const index_1 = require("../template/index");
let liststr = `Template List :`;
let li = [];
let index = 0;
for (let i in index_1.default) {
    liststr += `
    ${++index} : ${i}`;
    li[index] = index_1.default[i];
}
function lis() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(liststr);
    });
}
exports.default = lis;
//# sourceMappingURL=list.js.map