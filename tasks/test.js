/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { JSDOM } = require('jsdom');
const { createHarness } = require('zora');
const globby = require('globby');
const arg = require('arg');
const path = require('path');
const merge = require('lodash/merge');
const composer = require('module-composer');
const testHelpers = require('../test-helpers');
const bootOrig = require('../boot');

const { window } = new JSDOM('', { url: 'https://localhost/' });
window.fetch = () => undefined;
const helpers = composer({ helpers: testHelpers })('helpers', { window });

const defaultConfig = { 
    debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 }, 
    defaultSettings: { app: { modal: null } } 
};

const boot = (args = {}) => {
    const config = merge({}, defaultConfig, args.config);
    return bootOrig({ window, ...args, config });
};

const start = async () => {
    const { _: filePattern, '--only': runOnly, '--indent': indent } = arg(
        { '--only': Boolean, '--indent': Boolean }, 
        { permissive: false, argv: process.argv.slice(2) }
    );

    const testHarness = createHarness({ indent, runOnly });

    try {
        const files = await globby(filePattern);
        files.forEach(f => {
            const mod = require(path.resolve(process.cwd(), f));
            const func = runOnly ? 'only' : 'test';
            testHarness[func](f, ({ only, skip, ...t }) => {
                const test = (...args) => {
                    window.document.getElementsByTagName('html')[0].innerHTML = '';
                    t.test(...args);
                };
                Object.assign(test, { only, skip });
                mod({ test, boot, window, helpers });
            });
        });
        await testHarness.report();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        process.exit(testHarness.pass ? 0 : 1);
    }
};

start();
