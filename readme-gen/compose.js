const fs = require('fs');
const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ composition }) => {
    const { compose } = composer(modules);
    compose('io', { composition, fs });
    compose('renderers', { composition });
    return compose.end();
};
