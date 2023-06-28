/* eslint-disable import/no-unresolved */

import test from 'node:test';
import assert from 'node:assert/strict';

import JSDOM from 'jsdom';
import process from 'process';
import path from 'path';

const testFiles = process.argv.slice(2).map(f => path.resolve(f));

const { default: composeModules } = await import('../src/compose.js');
const { default: composeTesting } = await import('./compose.js');
const { default: defaultTestConfig } = await import('./test-config.js');

const setup = () => {
    const { window } = new JSDOM.JSDOM('', { url: 'https://localhost/' });
    const { helpers } = composeTesting({ window }).modules;

    const compose = ({ defaults, overrides, config } = {}) => {
        window.document.getElementsByTagName('html')[0].innerHTML = '';
        delete window.dataLayer;
        const options = { defaults, overrides, config: [defaultTestConfig, config] };
        const composition = composeModules({ window, ...options });
        composition.modules.startup.start({ composition });
        return composition;
    };

    return { compose, window, helpers };
};

const testTarget = setup();

await Promise.all(testFiles.map(async f => {
    const { default: setup } = await import(f);
    const run = setup({ test, assert });
    return run(testTarget);
}));
