module.exports = ({ window, elements, lib }) => (args = {}) => {

    const defaults = { visible: false, onVisibilityChange: () => undefined };
    const { title, content, actions, visible, onVisibilityChange } = { ...defaults, ...args };

    const { el } = elements;

    const dismiss = () => {
        $overlay.dispatchEvent(new window.CustomEvent('dismiss'));
    };

    const $dismiss = el('span', 'dismiss').addEventListener('click', dismiss);

    const $title = el('div', 'modal-title').append(title, $dismiss);
    lib.ui.toggleBoolClass($title, 'visible', Boolean(title));
    
    const $content = el('div', 'modal-content').append(content);

    const $actions = el('div', 'modal-actions').append(actions);
    lib.ui.toggleBoolClass($actions, 'visible', Boolean(actions));

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
