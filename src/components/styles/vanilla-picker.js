const Picker = require('vanilla-picker'); 

module.exports = ({ el }) => () => {
    
    return el('style', { textContent: Picker.css });

};
