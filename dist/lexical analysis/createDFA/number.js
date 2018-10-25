"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../NFA/Char");
const wordType_1 = require("../wordType");
function default_1(nfa, map) {
    const start = nfa.start;
    const float = Symbol(Math.random());
    const int = Symbol(Math.random());
    const temp = Symbol(Math.random());
    const end = [int, float];
    const status = [int, float, temp];
    const change = [
        {
            now: start,
            accept: Char_1.CharType.Number,
            then: int
        },
        {
            now: int,
            accept: Char_1.CharType.Number,
            then: int
        },
        {
            now: int,
            accept: Char_1.CharType.Dot,
            then: temp
        },
        {
            now: temp,
            accept: Char_1.CharType.Number,
            then: float
        },
        {
            now: float,
            accept: Char_1.CharType.Number,
            then: float
        }
    ];
    nfa.change = nfa.change.concat(change);
    nfa.status = nfa.status.concat(status);
    nfa.end = nfa.end.concat(end);
    map[float.toString()] = wordType_1.default.Sign;
    map[int.toString()] = wordType_1.default.Sign;
    return nfa;
}
exports.default = default_1;
//# sourceMappingURL=number.js.map