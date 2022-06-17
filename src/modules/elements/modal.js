export default ({ ui }) => (args = {}) => {

    const defaults = { visible: false, onVisibilityChange: () => undefined };
    const { title, content, actions, visible, onVisibilityChange } = { ...defaults, ...args };

    const dismiss = () => {
        $overlay.dispatchEvent(ui.event('dismiss'));
    };

    const $dismiss = ui.el('span', 'dismiss').addEventListener('click', dismiss);

    const $title = ui.el('div', 'modal-title').append(title, $dismiss);
    ui.toggleBoolClass($title, 'visible', Boolean(title));

    const $content = ui.el('div', 'modal-content').append(content);

    const $actions = ui.el('div', 'modal-actions').append(actions);
    ui.toggleBoolClass($actions, 'visible', Boolean(actions));

    const $prompt = ui.el('div', 'modal-prompt')
        .append($title, $content, $actions)
        .addEventListener('click', e => e.stopPropagation());

    const $overlay = ui.el('div', 'modal-overlay')
        .append($prompt)
        .addEventListener('click', dismiss);

    const toggleVisibility = visible => {
        ui.toggleBoolClass($overlay, 'visible', visible);
    };

    toggleVisibility(visible);
    onVisibilityChange(toggleVisibility, $overlay);

    return $overlay;

};
