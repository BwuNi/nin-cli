"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Char_1 = require("../NFA/Char");
const wordType_1 = require("../wordType");
function default_1(nfa, map) {
    const start = nfa.start;
    const word = Symbol(Math.random());
    const end = [word];
    const status = [word];
    const change = [
        {
            now: start,
            accept: Char_1.CharType.Letter,
            then: word
        },
        {
            now: word,
            accept: Char_1.CharType.Letter,
            then: word
        },
        {
            now: word,
            accept: Char_1.CharType.Number,
            then: word
        }
    ];
    nfa.change = nfa.change.concat(change);
    nfa.status = nfa.status.concat(status);
    nfa.end = nfa.end.concat(end);
    map[word.toString()] = wordType_1.default.Sign;
    return nfa;
}
exports.default = default_1;
//# sourceMappingURL=word.js.map