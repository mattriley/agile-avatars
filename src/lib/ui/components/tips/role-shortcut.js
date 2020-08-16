module.exports = ({ el }) => () => {

    return el('div', {
        title: 'Role shortcut',
        innerHTML: `
            <p>Roles can be set quickly by appending <mark>+role</mark> to a name. This applies to:</p>

            <ul>
                <li>File names, e.g. matt+dev.jpg</li>
                <li>Directly on the name field of each tag, e.g. matt+dev</li>
                <li>Gravatar emails, e.g. matt@fakemail.com+dev</li>
            </ul>
        `
    });

};