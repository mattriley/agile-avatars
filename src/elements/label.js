module.exports = ({ elements }) => (...nodes) => {

    const transformedNodes = nodes.map(node => {
        return typeof node === 'string' ? elements.el('span', 'label', { innerHTML: node }) : node;
    });

    return elements.el('label').append(...transformedNodes);
    
};

/* FOOTNOTES

Nesting the labelled control within the label avoids the need for `id` and `for`.

*/
