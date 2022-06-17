export default ({ ui }) => ({ layout, components, componentArgs = [] }) => {

    const groups = layout.split('|').map(str => str.trim().split(' '));

    const $$groups = groups.map(group => {
        const $$elements = group.map(name => components[name](...componentArgs));
        return ui.el('span', 'group').append(...$$elements);
    });

    return ui.el('div', 'layout').append(...$$groups);

};
