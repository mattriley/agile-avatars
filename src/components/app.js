module.exports = ({ el, components, subscriptions, util }) => () => {

    const $$modals = Object.values(components.modals).map(modal => modal());

    const $container = el('div', 'app').append(
        components.googleAnalytics(),
        components.styles(), 
        components.header(), 
        components.dropzone().append(
            el('div', 'control-panel').append(
                components.imageUploadOptions(),
                components.roleList(),
                components.optionsBar()
            ),
            components.tagList()
        ),
        ...$$modals
    );

    subscriptions.settings.app.onChange('modal', modal => {
        util.toggleBoolClass($container, 'modal', modal);
    }).invoke();

    return $container;

};
