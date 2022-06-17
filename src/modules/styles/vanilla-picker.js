import Picker from 'vanilla-picker';

export default ({ ui }) => () => {

    return ui.el('style', { textContent: Picker.css });

};
