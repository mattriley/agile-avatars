/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable no-process-exit */
import JSDOM from 'jsdom';
import { createHarness } from 'zora';
import { createDiffReporter } from 'zora-reporters';

import path from 'path';
import testConfig from '../../testing/test-config';
import composeTesting from '../../testing/compose';
import composeModules from '../../src/compose';
import _ from 'lodash';

const setup = () => {
    const { window } = new JSDOM.JSDOM('', { url: 'https://localhost/' });
    const resetJsdom = () => { window.document.getElementsByTagName('html')[0].innerHTML = ''; };
    const { helpers } = composeTesting({ window });

    const compose = (overrides = {}) => {
        resetJsdom();
        const config = _.merge({}, testConfig, overrides.config);
        const modules = composeModules({ window, config, overrides });
        modules.startup.start();
        return { config, ...modules };
    };

    return { compose, window, helpers };
};

const testModuleArgs = setup();
const testFiles = process.argv.slice(2);
const testHarness = createHarness({ indent: true });
const test = testHarness[process.env.ZORA_ONLY === 'true' ? 'only' : 'test'];

const runTests = filePath => {
    test(filePath, async ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        const { default: invokeTests } = await import(path.resolve(filePath));
        invokeTests({ test, setup, ...testModuleArgs });
    });
};

const start = async () => {
    let uncaughtError = null;

    try {
        testFiles.forEach(runTests);
        await testHarness.report({ reporter: createDiffReporter() });
    } catch (e) {
        console.error(e);
        uncaughtError = e;
    } finally {
        process.exitCode = !testHarness.pass || uncaughtError ? 1 : 0;
    }
};

start();
