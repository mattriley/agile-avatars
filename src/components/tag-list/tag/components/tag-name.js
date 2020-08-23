module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan('tag-name')
        .addEventListener('blur', () => {
            services.tags.changeTagInstanceName(tagInstanceId, $tagName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    });

    return $tagName;

};
