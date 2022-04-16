import Picker from 'vanilla-picker';

export default ({ window }) => ({ parent, color, onChange }) => {

    new Picker({ window, parent, color, onChange });
    return parent;

};
