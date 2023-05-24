export default ({ ui, components, elements, constants }) => () => {

    const $$fallbackOptions = constants.gravatar.fallbacks.map(components.gravatar.content.fallback);
    const $fallbacks = ui.el('div').append(...$$fallbackOptions);
    const labelText = 'Select a generated image style to use in case profile image is not found.';
    return elements.label(labelText, $fallbacks);

};
