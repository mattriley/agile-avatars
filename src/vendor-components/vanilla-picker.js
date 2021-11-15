const Picker = require('vanilla-picker');

module.exports = ({ window }) => ({ parent, color, onChange }) => {

    new Picker({ window, parent, color, onChange });
    return parent;

};
