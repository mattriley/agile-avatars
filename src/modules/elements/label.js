export default ({ ui }) => (...nodes) => {

    const transformedNodes = nodes.map(node => {
        return typeof node === 'string' ? ui.el('span', 'label', { innerHTML: node }) : node;
    });

    return ui.el('label').append(...transformedNodes);

};

/* FOOTNOTES

Nesting the labelled control within the label avoids the need for `id` and `for`.

*/
