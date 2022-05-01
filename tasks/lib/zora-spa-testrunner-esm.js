import JSDOM from 'jsdom';
import { createHarness } from 'zora';
import { createDiffReporter } from 'zora-reporters';
import glob from 'fast-glob';
import path from 'path';
import configure from '../../src/configure';
import composeTesting from '../../testing/compose';
import testConfig from '../../testing/test-config.json';

const setup = () => {
    const { window } = new JSDOM.JSDOM('', { url: 'https://localhost/' });
    const { helpers } = composeTesting({ window });

    const compose = ({ config, overrides } = {}) => {
        window.document.getElementsByTagName('html')[0].innerHTML = '';
        delete window.dataLayer;
        const modules = configure({ window, overrides }, testConfig, config);
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
        return invokeTests({ test, ...testModuleArgs });
    });
};

const start = async () => {
    await Promise.all(testFiles.map(runTests));
    await testHarness.report({ reporter: createDiffReporter() });
};

start();
