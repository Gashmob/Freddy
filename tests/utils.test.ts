import { beforeEach, describe, expect, it, vi } from 'vitest';
import utils from '../src/utils';
import fs from 'node:fs';

describe('saveLog', () => {
    beforeEach(() => {
        if (fs.existsSync('logs')) {
            fs.rmSync('logs', { recursive: true });
        }
    });

    it('should create logs dir only once', () => {
        const spyFsExistsSync = vi.spyOn(fs, 'existsSync');
        const spyFsMkDirSync = vi.spyOn(fs, 'mkdirSync');

        utils.saveLog([]);

        expect(spyFsExistsSync).toHaveNthReturnedWith(2, false);
        expect(spyFsMkDirSync).toHaveBeenCalledOnce();

        spyFsExistsSync.mockClear();
        spyFsMkDirSync.mockClear();

        utils.saveLog([]);

        expect(spyFsExistsSync).toHaveNthReturnedWith(2, true);
        expect(spyFsMkDirSync).not.toHaveBeenCalledOnce();
    });

    it('should create then append log file', () => {
        const spyFsExistsSync = vi.spyOn(fs, 'existsSync');
        const spyFsWriteFileSync = vi.spyOn(fs, 'writeFileSync');
        const spyFsAppendFileSync = vi.spyOn(fs, 'appendFileSync');

        utils.saveLog([]);

        expect(spyFsExistsSync).toHaveNthReturnedWith(2, false);
        expect(spyFsWriteFileSync).toHaveBeenCalledOnce();
        expect(spyFsAppendFileSync).not.toHaveBeenCalled();

        spyFsExistsSync.mockClear();
        spyFsWriteFileSync.mockClear();
        spyFsAppendFileSync.mockClear();

        utils.saveLog([]);

        expect(spyFsExistsSync).toHaveNthReturnedWith(2, true);
        expect(spyFsAppendFileSync).toHaveBeenCalledOnce();
    });
});

describe('buildPrefix', () => {
    it('should follow format', () => {
        const response0 = utils.buildPrefix('LOG');
        const response1 = utils.buildPrefix('LOG');

        const resp0 = response0.split(' - ');
        const resp1 = response1.split(' - ');

        expect(resp0).toHaveLength(3);
        expect(resp1).toHaveLength(3);

        expect(parseInt(resp0[1])).toBe(0);
        expect(parseInt(resp1[1])).toBe(1);

        expect(resp0[2]).toContain('LOG');
        expect(resp1[2]).toContain('LOG');
    });
});

describe('displayLog', () => {
    it('should call saveLog and buildPrefix', () => {
        const spyUtilsBuildPrefix = vi
            .spyOn(utils, 'buildPrefix')
            .mockImplementation(() => '');
        const spyUtilsSaveLog = vi
            .spyOn(utils, 'saveLog')
            .mockImplementation(() => {});

        const response = utils.displayLog([], 'LOG');

        expect(spyUtilsBuildPrefix).toHaveBeenCalledWith('LOG');
        expect(spyUtilsSaveLog).toHaveBeenCalledOnce();
    });
});

describe('log', () => {
    it('should call displayLog', () => {
        const spyUtilsDisplayLog = vi
            .spyOn(utils, 'displayLog')
            .mockImplementation(() => '');

        console.log('');

        expect(spyUtilsDisplayLog).toHaveBeenCalledWith([''], 'LOG');
    });
});

describe('info', () => {
    it('should call displayLog', () => {
        const spyUtilsDisplayLog = vi
            .spyOn(utils, 'displayLog')
            .mockImplementation(() => '');

        console.info('');

        expect(spyUtilsDisplayLog).toHaveBeenCalledWith([''], 'INFO');
    });
});

describe('error', () => {
    it('should call displayLog', () => {
        const spyUtilsDisplayLog = vi
            .spyOn(utils, 'displayLog')
            .mockImplementation(() => '');

        console.error('');

        expect(spyUtilsDisplayLog).toHaveBeenCalledWith([''], 'ERROR');
    });
});

describe('warn', () => {
    it('should call displayLog', () => {
        const spyUtilsDisplayLog = vi
            .spyOn(utils, 'displayLog')
            .mockImplementation(() => '');

        console.warn('');

        expect(spyUtilsDisplayLog).toHaveBeenCalledWith([''], 'WARN');
    });
});
