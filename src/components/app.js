module.exports = ({ el, components, subscriptions, dom, vendor }) => () => {

    const $$modals = Object.values(components.modals).map(modal => modal());

    const $container = el('div', 'app').append(
        vendor.components.gtagScript(),
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
        dom.toggleBoolClass($container, 'modal', modal);
    });

    return $container;

};
