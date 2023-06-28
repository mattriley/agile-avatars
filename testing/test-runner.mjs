/* eslint-disable import/no-unresolved */

import test from 'node:test';
import assert from 'node:assert/strict';
import process from 'process';
import JSDOM from 'jsdom';
import path from 'path';

const testFiles = process.argv.slice(2).map(f => path.resolve(f));

const { default: composeModules } = await import('../src/compose.js');
const { default: composeTesting } = await import('./compose.js');
const { default: defaultTestConfig } = await import('./test-config.js');

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

testFiles.forEach(async f => {
    const { default: setup } = await import(f);
    const run = setup({ test, assert, helpers, window });
    // const const { services, components } = compose().modules;
    return run({ compose });
});
