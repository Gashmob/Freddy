import fs from 'node:fs';

const log_file = `logs/${new Date().toISOString()}.log`;

let counter = 0;

const utils = {
    buildPrefix(type: string): string {
        return `[${new Date().toISOString()} - ${counter++} - ${type}]`;
    },
    saveLog(args: any[]): void {
        if (!fs.existsSync('logs')) {
            fs.mkdirSync('logs');
        }
        if (fs.existsSync(log_file)) {
            fs.appendFileSync(log_file, args.join(' ') + '\n');
        } else {
            fs.writeFileSync(log_file, args.join(' ') + '\n');
        }
    },
    displayLog(args: any[], type: string): string {
        args.unshift(utils.buildPrefix(type));
        utils.saveLog(args);

        return args.join(' ');
    },
};

export default utils;

const log = console.log;
console.log = (...args: any[]) => log(utils.displayLog(args, 'LOG'));

const info = console.info;
console.info = (...args: any[]) => log(utils.displayLog(args, 'INFO'));

const error = console.error;
console.error = (...args: any[]) => log(utils.displayLog(args, 'ERROR'));

const warn = console.warn;
console.warn = (...args: any[]) => log(utils.displayLog(args, 'WARN'));
