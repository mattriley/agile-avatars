module.exports = {
    dataTransforms: require('./data-transforms'),
    buildTag: require('./build-tag'),
    parseEmailExpression: require('./parse-email-expression'),
    parseFileExpression: require('./parse-file-expression'),
    parseTagExpression: require('./parse-tag-expression'),
    planTagInstanceAdjustment: require('./plan-tag-instance-adjustment'),
    sortTagInstancesByTagThenMode: require('./sort-tag-instances-by-tag-then-mode'),
    sortTagsByName: require('./sort-tags-by-name'),
    sortTagsByRoleThenName: require('./sort-tags-by-role-then-name')
};
