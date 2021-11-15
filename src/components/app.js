module.exports = ({ el, ui, components, vendorComponents, subscriptions }) => () => {

    const $$modals = Object.values(components.modals).map(modal => modal());

    const $container = el('div', 'app').append(
        vendorComponents.gtagScript(),
        el('div', 'modals').append(...$$modals),
        components.header.container(), 
        components.dropzone().append(
            el('div', 'control-panel').append(
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
