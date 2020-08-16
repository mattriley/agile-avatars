module.exports = ({ window, elements }) => (props = {}) => {

    const $span = elements.el('span', props)
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
