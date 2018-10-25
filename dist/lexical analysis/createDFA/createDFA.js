"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NFA_1 = require("../NFA/NFA");
const word_1 = require("./word");
const number_1 = require("./number");
const bracket_1 = require("./bracket");
const nfaToDfa_1 = require("../NFA/nfaToDfa");
const map = {};
const start = Symbol('start');
const dfa = new NFA_1.default(start);
word_1.default(dfa, map);
number_1.default(dfa, map);
bracket_1.default(dfa, map);
dfa.map = map;
exports.default = nfaToDfa_1.default(dfa);
//# sourceMappingURL=createDFA.js.map