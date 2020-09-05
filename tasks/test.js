/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { JSDOM } = require('jsdom');
const { createHarness } = require('zora');
const merge = require('lodash/merge');
const composer = require('module-composer');
const testHelpers = require('../test-helpers');
const bootOrig = require('../boot');

const { window } = new JSDOM('', { url: 'https://localhost/' });
window.fetch = () => undefined;
const resetJsdom = () => { window.document.getElementsByTagName('html')[0].innerHTML = ''; };
const helpers = composer({ helpers: testHelpers })('helpers', { window });

const defaultConfig = { 
    debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 }, 
    defaultSettings: { app: { modal: null } } 
};

const boot = (args = {}) => {
    const config = merge({}, defaultConfig, args.config);
    return bootOrig({ window, ...args, config });
};

const files = process.argv.slice(2);
const indent = process.env.INDENT === 'true';
const runOnly = process.env.RUN_ONLY === 'true';
const testHarness = createHarness({ indent, runOnly });
const test = testHarness[runOnly ? 'only' : 'test'];

const runTests = filePath => {
    test(filePath, ({ only, skip, ...t }) => {
        const test = (...args) => { resetJsdom(); t.test(...args); };
        Object.assign(test, { only, skip });
        require(filePath)({ test, boot, window, helpers });
    });
};

const start = async () => {
    try {
        files.forEach(runTests);
        await testHarness.report();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        process.exit(testHarness.pass ? 0 : 1);
    }
};

start();
