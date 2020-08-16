module.exports = ({ elements, services, subscriptions }) => instanceId => {

    const $tagName = elements.editableSpan({
        className: 'tag-name'
    }).addEventListener('blur', e => {
        const tagName = e.target.textContent.trim();
        const { tagId } = services.tags.getInstance(instanceId);
        services.tags.changeTagName(tagId, tagName);
    });

    subscriptions.tagInstances.onChange(instanceId, 'tagName', tagName => {
        $tagName.textContent = tagName;
    }).invoke();

    return $tagName;

};
