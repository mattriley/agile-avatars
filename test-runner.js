/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { JSDOM } = require('jsdom');
const { createHarness } = require('zora');
const globby = require('globby');
const path = require('path');

const merge = require('lodash/merge');
const composer = require('module-composer');
const testHelpers = require('./test-helpers');
const src = require('./src');
const bootOrig = require('./boot');

const compose = composer({ helpers: testHelpers });
const { window } = new JSDOM('', { url: 'https://localhost/' });
const helpers = compose('helpers', { window });

const defaultConfig = { 
    debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 }, 
    defaultSettings: { app: { modal: null } } 
};

const boot = (args = {}) => {
    delete window.dataLayer;
    window.fetch = () => undefined;
    window.document.getElementsByTagName('html')[0].innerHTML = '';
    const config = merge({}, defaultConfig, args.config);
    return bootOrig({ window, ...args, config });
};

const arg = require('arg');

const DEFAULT_FILE_PATTERN = ['tests/**/*.test.js'];


const start = async () => {
    const { _: filePatternArg, '--only': runOnly } = arg({ '--only': Boolean, '-o': '--only' }, {
        permissive: false,
        argv: process.argv.slice(2)
    });

    const filePattern = filePatternArg.length > 0 ? filePatternArg : DEFAULT_FILE_PATTERN;

    const testHarness = createHarness({
        indent: true,
        runOnly
    });
    try {
        const files = await globby(filePattern);
        for (const f of files) {
            const mod = require(path.resolve(process.cwd(), f));
            const zora = testHarness;
            const func = runOnly ? 'only' : 'test';
            zora[func](f, t => {
                mod({ ...t, zora, boot, src, window, helpers });
            });
        }
        await testHarness.report();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        process.exit(testHarness.pass ? 0 : 1);
    }
};

start();
