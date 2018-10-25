"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const script_1 = require("./script");
process.env.NODE_PATH = __dirname + '/../node_modules/';
program
    .version("0.0.1")
    .usage('<command> [options]');
program.command('init (template)')
    .description("创建新新项目")
    .alias('i')
    .action(function (template) {
    script_1.default.init();
});
program.command('list')
    .description("模板列表")
    .alias('l')
    .action(function (template) {
    script_1.default.list();
});
program.parse(process.argv);
if (program.args.length == 0) {
    program.help();
}
//# sourceMappingURL=index.js.map