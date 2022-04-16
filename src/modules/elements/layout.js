export default ({ el }) => ({ layout, components, componentArgs = [] }) => {

    const groups = layout.split('|').map(str => str.trim().split(' '));

    const $$groups = groups.map(group => {
        const $$elements = group.map(name => components[name](...componentArgs));
        return el('span', 'group').append(...$$elements);
    });

    return el('div', 'layout').append(...$$groups);

};
