module.exports = ({ window, elements }) => className => {

    const $span = elements.el('span', className)
        .addEventListener('keydown', e => {            
            if (e.code === 'Enter') {
                e.preventDefault();
                $span.dispatchEvent(new window.Event('blur'));
            }
        });
    
    $span.setAttribute('contenteditable', true);

    return $span;
};

/* FOOTNOTES

- Content editable span preferred over text field for the ability to expand/contract while editing.
- `e.preventDefault()` on enter key prevents cursor moving to next line.

*/
