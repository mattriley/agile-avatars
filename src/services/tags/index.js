module.exports = {
    adjustTagInstanceCounts: require('./adjust-tag-instance-counts'),
    attachImageAsync: require('./attach-image-async'),
    buildTagInstance: require('./build-tag-instance'),
    changeTagInstanceName: require('./change-tag-instance-name'),
    changeTagInstanceRole: require('./change-tag-instance-role'),
    getTagInstance: require('./get-tag-instance'),
    insertFileAsync: require('./insert-file-async'),
    insertFileBatchAsync: require('./insert-file-batch-async'),
    insertGravatarAsync: require('./insert-gravatar-async'),
    insertGravatarBatchAsync: require('./insert-gravatar-batch-async'),
    insertTagInstance: require('./insert-tag-instance'),
    insertTag: require('./insert-tag'),
    removeTagInstance: require('./remove-tag-instance'),
    setupRolePropagation: require('./setup-role-propagation'),
    setupTagPropagation: require('./setup-tag-propagation'),
    sortTagInstances: require('./sort-tag-instances')
};
