module.exports = ({ services, stores, subscriptions }) => tagData => {

    const tag = services.tags.buildTag(tagData);

    return stores.tags.insert(tag, tagId => {

        subscriptions.tags.onChange(
            tagId, 
            'tagName', 
            services.tags.setupTagPropagation(tagId)
        );

        subscriptions.tags.onChange(
            tagId, 
            'roleId', 
            services.tags.setupRolePropagation(tagId)
        );
    
    });
    
};
