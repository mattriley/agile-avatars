/* eslint-disable import/no-unresolved */

import JSDOM from 'jsdom';
import { run } from 'module-testrunner';

import { default as composeModules } from '../src/compose.js';
import { default as composeHelpers } from './compose.js';
import { default as defaultTestConfig } from './test-config.js';

const { window } = new JSDOM.JSDOM('', { url: 'https://localhost/' });
const { helpers } = composeHelpers({ window });

const compose = ({ overrides, config } = {}) => {
    window.document.getElementsByTagName('html')[0].innerHTML = '';
    delete window.dataLayer;
    const options = { window, overrides, config: [defaultTestConfig, config] };
    const { startup, composition } = composeModules(options);
    startup.start({ composition });
    return composition;
};

const context = { window, helpers };
const args = [{ compose }];
run({ context, args });
