/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable no-process-exit */

const { JSDOM } = require('jsdom');
const { createHarness } = require('zora');
const path = require('path');
const composer = require('module-composer');
const testHelpers = require('../test-helpers');
const bootOrig = require('../boot');

const setup = () => {
    const { window } = new JSDOM('', { url: 'https://localhost/' });
    window.fetch = () => undefined;
    const resetJsdom = () => { window.document.getElementsByTagName('html')[0].innerHTML = ''; };
    const helpers = composer({ helpers: testHelpers })('helpers', { window });

    const boot = (args = {}) => {
        resetJsdom(); 
        const defaultConfig = { debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 } };
        const config = Object.assign(defaultConfig, args.config);
        return bootOrig({ window, ...args, config });
    };

    return { boot, window, helpers };
};

const args = setup();

const files = process.argv.slice(2);
const indent = process.env.INDENT === 'true';
const runOnly = process.env.RUN_ONLY === 'true';
const testHarness = createHarness({ indent, runOnly });
const test = testHarness[runOnly ? 'only' : 'test'];

const runTests = async filePath => {
    await test(filePath, async ({ only, skip, ...t }) => {
        const test = async (...args) => { await t.test(...args); };
        Object.assign(test, { only, skip });
        await require(path.resolve(filePath))({ test, setup, ...args });
    });
};

const start = async () => {
    try {
        await files.reduce(async (p, f) => {
            await p;
            return runTests(f);
        }, Promise.resolve());

        // files.forEach(runTests);
        await testHarness.report();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        process.exit(testHarness.pass ? 0 : 1);
    }
};

start();
