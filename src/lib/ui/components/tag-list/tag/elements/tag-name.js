module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $tagName = elements.editableSpan({ className: 'tag-name' })
        .addEventListener('blur', () => {
            const tagName = $tagName.textContent.trim();
            const { tagId } = services.tags.getInstance(tagInstanceId);
            services.tags.changeTagName(tagId, tagName);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    }).invoke();

    return $tagName;

};
