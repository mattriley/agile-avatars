export default ({ el }) => () => {

    return el('div', {
        title: 'Naming',
        innerHTML: `
            <p>
                Prefer <mark>short names</mark> and <mark>abbreviated roles</mark>. 
                Less is more. Use just enough detail to identify people at a glance.
                Avoid full names and position titles if possible.
            </p>`
    });

};
