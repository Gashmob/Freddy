import fs from 'node:fs';

const log_file = `logs/${new Date().toISOString()}.log`;

let counter = 0;

function buildPrefix(type: string): string {
    return `[${new Date().toISOString()} - ${counter++} - ${type}]`;
}

function saveLog(args: any[]): void {
    if (!fs.existsSync('logs')) {
        fs.mkdirSync('logs');
    }
    if (fs.existsSync(log_file)) {
        fs.appendFileSync(log_file, args.join(' ') + '\n');
    } else {
        fs.writeFileSync(log_file, args.join(' ') + '\n');
    }
}

const log = console.log;
console.log = (...args: any[]) => {
    args.unshift(buildPrefix('LOG'));
    saveLog(args);

    log(...args);
};

const info = console.info;
console.info = (...args: any[]) => {
    args.unshift(buildPrefix('INFO'));
    saveLog(args);

    info(...args);
};

const error = console.error;
console.error = (...args: any[]) => {
    args.unshift(buildPrefix('ERROR'));
    saveLog(args);

    error(...args);
};

const warn = console.warn;
console.warn = (...args: any[]) => {
    args.unshift(buildPrefix('WARN'));
    saveLog(args);

    warn(...args);
};
