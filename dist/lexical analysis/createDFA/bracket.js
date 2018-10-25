"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../NFA/Char");
const wordType_1 = require("../wordType");
function default_1(nfa, map) {
    const start = nfa.start;
    const finish = nfa.finished;
    const l0 = Symbol(Math.random());
    const end = [l0];
    const status = [l0];
    const change = [
        {
            now: finish,
            accept: Char_1.CharType.L0,
            then: l0
        },
        {
            now: start,
            accept: Char_1.CharType.L0,
            then: l0
        },
        {
            now: l0,
            accept: Char_1.CharType.None,
            then: start
        },
    ];
    nfa.change = nfa.change.concat(change);
    nfa.status = nfa.status.concat(status);
    nfa.end = nfa.end.concat(end);
    map[l0.toString()] = wordType_1.default.L0;
    return nfa;
}
exports.default = default_1;
//# sourceMappingURL=bracket.js.map