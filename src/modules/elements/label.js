export default ({ el }) => (...nodes) => {

    const transformedNodes = nodes.map(node => {
        return typeof node === 'string' ? el('span', 'label', { innerHTML: node }) : node;
    });

    return el('label').append(...transformedNodes);

};

/* FOOTNOTES

Nesting the labelled control within the label avoids the need for `id` and `for`.

*/
