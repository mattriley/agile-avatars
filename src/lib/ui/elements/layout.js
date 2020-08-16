module.exports = ({ elements }) => ({ layout, components, componentArgs = [] }) => {

    const groups = layout.split('|').map(str => str.trim().split(' '));

    const $$groups = groups.map(group => {
        const $$elements = group.map(name => components[name](...componentArgs));
        return elements.el('span', 'group').append(...$$elements);
    });

    return elements.el('div', 'layout').append(...$$groups);

};
