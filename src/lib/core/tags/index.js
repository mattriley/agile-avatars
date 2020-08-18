module.exports = {
    __modulename: 'tags',
    dataTransforms: require('./data-transforms'),
    expandInstanceData: require('./expand-instance-data'),
    parseEmailExpression: require('./parse-email-expression'),
    parseFileExpression: require('./parse-file-expression'),
    parseTagExpression: require('./parse-tag-expression'),
    planInstanceAdjustment: require('./plan-instance-adjustment'),
    sortTagInstancesByTagThenMode: require('./sort-tag-instances-by-tag-then-mode'),
    sortTagsByName: require('./sort-tags-by-name'),
    sortTagsByRoleThenName: require('./sort-tags-by-role-then-name')
};
