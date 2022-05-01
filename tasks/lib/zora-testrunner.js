const { createHarness } = require('zora');
const { createDiffReporter } = require('zora-reporters');
const path = require('path');

const testFiles = process.argv.slice(2);
const testHarness = createHarness({ indent: true });
const test = testHarness[process.env.ZORA_ONLY === 'true' ? 'only' : 'test'];

const runTests = filePath => {
    return test(filePath, ({ only, skip, ...t }) => {
        const test = (...args) => t.test(...args);
        Object.assign(test, { only, skip });
        return require(path.resolve(filePath))({ test });
    });
};

const start = async () => {
    await Promise.all(testFiles.map(runTests));
    await testHarness.report({ reporter: createDiffReporter() });
};

start();
