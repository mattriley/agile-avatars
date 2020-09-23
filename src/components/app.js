module.exports = ({ el, components, subscriptions, lib }) => () => {

    const $$styles = Object.values(components.styles).map(style => style());
    const $$modals = Object.values(components.modals).map(modal => modal());

    const $container = el('div', 'app').append(
        el('div', 'styles').append(...$$styles),
        el('div', 'modals').append(...$$modals),
        // components.googleAnalytics(),
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
        lib.ui.toggleBoolClass($container, 'modal', modal);
    });

    return $container;

};
