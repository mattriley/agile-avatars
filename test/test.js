const { JSDOM } = require('jsdom');
const tape = require('tape');
const merge = require('lodash/merge');
const composer = require('module-composer');
const test = require('.');
const src = require('../src');
const bootOrig = require('../boot');

const compose = composer(test);
const { window } = new JSDOM('', { url: 'https://localhost/' });
const helpers = compose('helpers', { window });

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

compose('tests', { test: tape, boot, src, window, helpers });
