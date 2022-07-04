const fs = require('fs');
const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ target }) => {
    const { compose } = composer(modules);
    compose('io', { target, fs });
    compose('renderers', { target });
    return compose.end();
};
