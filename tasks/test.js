/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable no-process-exit */
import { JSDOM } from 'jsdom';
import { createHarness, createJSONReporter } from 'zora';
import path from 'path';
import composer from 'module-composer';
import testHelpers from '../test-helpers';
import src from '../src/modules';
import bootOrig from '../src/boot';
import baseConfig from '../src/data/config.json';
import _ from 'lodash';

const setup = () => {
    const { window } = new JSDOM('', { url: 'https://localhost/' });
    const resetJsdom = () => { window.document.getElementsByTagName('html')[0].innerHTML = ''; };
    const helpers = composer({ helpers: testHelpers })('helpers', { window });

    const boot = (args = {}) => {
        resetJsdom();
        const defaultConfig = { debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 } };
        const config = _.merge({}, baseConfig, defaultConfig, args.config);
        const modules = bootOrig({ window, ...args, config }).getModules();
        modules.startup.start();
        return modules;
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
    test(filePath, async ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        const { default: invokeTests } = await import(path.resolve(filePath));
        invokeTests({ test, setup, ...args });
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
