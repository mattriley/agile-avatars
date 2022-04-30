/* eslint-disable no-process-env */
const { createHarness } = require('zora');
const { createDiffReporter } = require('zora-reporters');
const path = require('path');

const files = process.argv.slice(2);
const testHarness = createHarness({ indent: true });
const test = testHarness[process.env.ZORA_ONLY === 'true' ? 'only' : 'test'];

const runTests = filePath => {
    test(filePath, ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        require(path.resolve(filePath))({ test });
    });
};

const start = async () => {
    let uncaughtError = null;

    try {
        files.forEach(runTests);
        await testHarness.report({ reporter: createDiffReporter() });
    } catch (e) {
        console.error(e);
        uncaughtError = e;
    } finally {
        process.exitCode = !testHarness.pass || uncaughtError ? 1 : 0;
    }
};

start();
