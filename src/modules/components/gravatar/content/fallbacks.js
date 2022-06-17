export default ({ ui, content, elements, config }) => () => {

    const $$fallbackOptions = config.gravatar.fallbacks.map(content.fallback);
    const $fallbacks = ui.el('div').append(...$$fallbackOptions);
    const labelText = 'Select a generated image style to use in case profile image is not found.';
    return elements.label(labelText, $fallbacks);

};
