export default ({ el }) => () => {

    return el('div', {
        title: 'Laminating',
        innerHTML: `
            <p>
                For a more durable result, <mark>cut out the tags before your laminate them</mark>.
                Keeping a small lip around the edges helps maintain adhesion.
            </p>`
    });

};
