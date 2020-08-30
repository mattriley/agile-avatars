/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { JSDOM } = require('jsdom');
const zora = require('zora');
const globby = require('globby');
const path = require('path');

const merge = require('lodash/merge');
const composer = require('module-composer');
const testSrc = require('.');
const src = require('../src');
const bootOrig = require('../boot');

const compose = composer(testSrc);
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

const start = async () => {
    const testHarness = zora.createHarness({
        indent: true
    });
    try {
        const files = await globby('test/tests/**/*.test.js');
        for (const f of files) {
            const mod = require(path.resolve(process.cwd(), f));
            const { test } = testHarness;
            test(f, t => {
                mod({ test: t.test, boot, src, window, helpers });
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
