import JSDOM from 'jsdom';
import { createHarness } from 'zora';
import { createDiffReporter } from 'zora-reporters';
import glob from 'fast-glob';
import path from 'path';
import configure from '../../src/configure';
import testConfig from '../../testing/test-config';
import composeTesting from '../../testing/compose';

const setup = () => {
    const { window } = new JSDOM.JSDOM('', { url: 'https://localhost/' });
    const resetDocument = () => { window.document.getElementsByTagName('html')[0].innerHTML = ''; };
    const { helpers } = composeTesting({ window });

    const compose = (overrides = {}) => {
        resetDocument();
        const modules = configure({ window, overrides }, testConfig, overrides.config);
        modules.startup.start();
        return modules;
    };

    return { compose, window, helpers };
};

const testModuleArgs = setup();
const [pattern] = process.argv.slice(2);
const testFiles = glob.sync(pattern);
const testHarness = createHarness({ indent: true });
const test = testHarness[process.env.ZORA_ONLY === 'true' ? 'only' : 'test'];

const runTests = filePath => {
    return test(filePath, async ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        const { default: invokeTests } = await import(path.resolve(filePath));
        return invokeTests({ test, setup, ...testModuleArgs });
    });
};

const start = async () => {
    await Promise.all(testFiles.map(runTests));
    await testHarness.report({ reporter: createDiffReporter() });
};

start();
