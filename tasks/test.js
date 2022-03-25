/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { JSDOM } = require('jsdom');
const { createHarness, createJSONReporter } = require('zora');
const path = require('path');
const composer = require('module-composer');
const testHelpers = require('../test-helpers');
const src = require('../src/modules');
const bootOrig = require('../src/boot');
const baseConfig = require('../src/data/config.json');
const _ = require('lodash');

const setup = () => {
    const { window } = new JSDOM('', { url: 'https://localhost/' });
    const resetJsdom = () => { window.document.getElementsByTagName('html')[0].innerHTML = ''; };
    const helpers = composer({ helpers: testHelpers })('helpers', { window });

    const boot = (args = {}) => {
        resetJsdom();
        const defaultConfig = { debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 } };
        const config = _.merge({}, baseConfig, defaultConfig, args.config);
        const app = bootOrig({ window, ...args, config });
        app.startup.start();
        return app;
    };

    return { src, boot, window, helpers };
};

const args = setup();

const files = process.argv.slice(2);
const indent = process.env.INDENT === 'true';
const runOnly = process.env.RUN_ONLY === 'true';
const testHarness = createHarness({ indent, runOnly });
const test = testHarness[runOnly ? 'only' : 'test'];

const runTests = filePath => {
    test(filePath, ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        require(path.resolve(filePath))({ test, setup, ...args });
    });
};

const start = async () => {
    let uncaughtError = null;

    try {
        files.forEach(runTests);
        await testHarness.report({ reporter: createJSONReporter() });
    } catch (e) {
        console.error(e);
        uncaughtError = e;
    } finally {
        process.exitCode = !testHarness.pass || uncaughtError ? 1 : 0;
    }
};

start();
