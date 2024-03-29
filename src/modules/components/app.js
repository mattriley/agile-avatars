export default ({ io, ui, components, subscriptions }) => () => {

    io.mixpanel.track('pageview');

    const $$modals = Object.values(components.modals).map(modal => modal());

    const $container = ui.el('div', 'app').append(
        ui.el('div', 'modals').append(...$$modals),
        components.header.container(),
        components.dropzone().append(
            ui.el('div', 'control-panel').append(
                components.imageUploadOptions.container(),
                components.roleList.container(),
                components.optionsBar.container()
            ),
            components.tagList.container()
        )
    );

    subscriptions.settings.onChange('app', 'modal', modal => {
        ui.toggleBoolClass($container, 'modal', modal);
    });

    return $container;

};
