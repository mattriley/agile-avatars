const glob = require('fast-glob');
const ejs = require('ejs');
const fs = require('fs');
const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ target }) => {
    const io = { fs, glob, ejs };
    const { compose } = composer({ io, ...modules });
    compose('renderers', { io, target });
    return compose.end();
};
