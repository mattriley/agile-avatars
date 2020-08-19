module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan({ className: 'tag-name' })
        .addEventListener('blur', () => {
            services.tags.changeTagInstanceName(tagInstanceId, $tagName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    }).invoke();

    return $tagName;

};
