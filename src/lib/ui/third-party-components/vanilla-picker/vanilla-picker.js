const Picker = require('vanilla-picker');

module.exports = ({ window }) => args => {

    new Picker({ window, ...args });
    return args.parent;

};
