const fs = require('fs');
const composer = require('module-composer');
const src = require('./src');

module.exports = ({ composition }) => {
    const { compose } = composer(src);
    compose('io', { composition, fs });
    compose('renderers', { composition });
    return compose.end();
};
