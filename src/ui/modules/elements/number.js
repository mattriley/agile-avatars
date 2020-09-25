module.exports = ({ el }) => ({ min, max, step }) => {

    const isEmpty = () => $number.value === '';

    const onChangeInternal = cancel => () => {
        if (cancel()) return;
        const val = isEmpty() ? $number.min : parseInt($number.value);
        const newVal = val < min ? min : val > max ? max : val;
        $number.value = newVal;
    };

    const $number = el('input', { type: 'number', min, max, step })
        .addEventListener('input', onChangeInternal(isEmpty))
        .addEventListener('blur', onChangeInternal(() => false));
    
    return $number;
    
};

/* FOOTNOTES

About <input type="number">
- Value can be any floating-point number, or empty.
- Floating-point numbers avoided by setting `step` to an integer.
- Automatically rejects non-numeric values (except empty).
- Provides validation, but does not actually reject values outside min and max range.

*/
