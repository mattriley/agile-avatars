/* eslint-disable import/no-unresolved */

import JSDOM from 'jsdom';
import { run } from 'module-testrunner';

const { default: composeModules } = await import('../src/compose.js');
const { default: composeTesting } = await import('./compose.js');
const { default: defaultTestConfig } = await import('./test-config.js');

const { window } = new JSDOM.JSDOM('', { url: 'https://localhost/' });
const { helpers } = composeTesting({ window }).modules;

const compose = ({ defaults, overrides, config } = {}) => {
    window.document.getElementsByTagName('html')[0].innerHTML = '';
    delete window.dataLayer;
    const options = { window, defaults, overrides, config: [defaultTestConfig, config] };
    const composition = composeModules(options);
    composition.modules.startup.start({ composition });
    return composition;
};

const args = [{ compose }];
run({ args, helpers, window });
