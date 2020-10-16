module.exports = ({ el, ui, components, vendorComponents, subscriptions }) => () => {

    const $$modals = Object.values(components.modals).map(modal => modal());

    const $container = el('div', 'app').append(
        vendorComponents.gtagScript(),
        el('div', 'modals').append(...$$modals),
        components.header(), 
        components.dropzone().append(
            el('div', 'control-panel').append(
                components.imageUploadOptions(),
                components.roleList(),
                components.optionsBar()
            ),
            components.tagList()
        )
    );

    subscriptions.settings.onChange('app', 'modal', modal => {
        ui.toggleBoolClass($container, 'modal', modal);
    });

    return $container;

};
