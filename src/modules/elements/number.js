export default ({ el, ui, util }) => ({ min, max, step }) => {

    const intValue = () => parseInt($number.value);

    const adjustValue = util.pipe(
        val => (isNaN(val) ? min : val),
        val => (val < min ? min : val),
        val => (val > max ? max : val)
    );

    const onInput = () => {
        const val = intValue();
        const adjustedVal = adjustValue(val);
        if (val === adjustedVal) $number.dispatchEvent(ui.event('change'));
    };

    const onBlur = () => {
        $number.value = adjustValue(intValue());
        onInput();
    };

    const $number = el('input', { type: 'number', min, max, step })
        .addEventListener('input', onInput)
        .addEventListener('blur', onBlur);

    return $number;

};

/* FOOTNOTES

About <input type="number">
- Value can be any floating-point number, or empty.
- Floating-point numbers avoided by setting `step` to an integer.
- Automatically rejects non-numeric values (except empty).
- Provides validation, but does not actually reject values outside min and max range.

*/
