export default ({ el, ui }) => className => {

    const dispatchChange = () => $span.dispatchEvent(ui.event('change'));

    const $span = el('span', className)
        .addEventListener('blur', () => {
            dispatchChange();
        })
        .addEventListener('keydown', e => {
            if (e.code === 'Enter') {
                e.preventDefault();
                dispatchChange();
            }
        });

    $span.setAttribute('contenteditable', true);

    return $span;
};

/* FOOTNOTES

- Content editable span preferred over text field for the ability to expand/contract while editing.
- `e.preventDefault()` on enter key prevents cursor moving to next line.

*/
