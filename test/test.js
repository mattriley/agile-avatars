const { JSDOM } = require('jsdom');
const tape = require('tape');
const merge = require('lodash/merge');
const compose = require('module-composer');
const test = require('.');
const bootOrig = require('../boot');

const { window } = new JSDOM('', { url: 'https://localhost/' });
const helpers = compose(test.helpers, { window });

const defaultConfig = { 
    debounce: { adjustTagInstanceCounts: 0, sortTagList: 0 }, 
    defaultSettings: { app: { modal: null } } 
};

const boot = (args = {}) => {
    delete window.dataLayer;
    window.fetch = () => undefined;
    window.document.getElementsByTagName('html')[0].innerHTML = '';
    const config = merge({}, defaultConfig, args.config);
    return bootOrig({ window, ...args, config });
};

compose(test.tests, { test: tape, boot, window, helpers });
