const merge = require('lodash/merge');

module.exports = ({ window, elements, lib }) => (args = {}) => {

    const defaults = {
        visible: false,
        onVisibilityChange: () => undefined
    };

    const { title, content, actions, visible, onVisibilityChange } = merge(defaults, args);

    const { el } = elements;

    const dismiss = () => {
        $overlay.dispatchEvent(new window.CustomEvent('dismiss'));
    };

    const $dismiss = el('span', 'dismiss')
        .addEventListener('click', dismiss);

    const $title = el('div', `modal-title visible-${Boolean(title)}`)
        .append(title, $dismiss);
    
    const $content = el('div', 'modal-content')
        .append(content);

    const $actions = el('div', `modal-actions visible-${Boolean(actions)}`)
        .append(actions);

    const $prompt = el('div', 'modal-prompt')
        .append($title, $content, $actions)
        .addEventListener('click', e => e.stopPropagation());

    const $overlay = el('div', 'modal-overlay')
        .append($prompt)
        .addEventListener('click', dismiss);
    
    const toggleVisibility = visible => {
        lib.ui.toggleBoolClass($overlay, 'visible', visible);
    };

    toggleVisibility(visible);
    onVisibilityChange(toggleVisibility, $overlay);
    
    return $overlay;

};
