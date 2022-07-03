import buildTag from './build-tag.js';
import parseEmailExpression from './parse-email-expression.js';
import parseFileExpression from './parse-file-expression.js';
import parseTagExpression from './parse-tag-expression.js';
import planTagInstanceAdjustment from './plan-tag-instance-adjustment.js';
import sortTagInstancesByTagThenMode from './sort-tag-instances-by-tag-then-mode.js';
import sortTagsByName from './sort-tags-by-name.js';
import sortTagsByRoleThenName from './sort-tags-by-role-then-name.js';

export default {
    buildTag,
    parseEmailExpression,
    parseFileExpression,
    parseTagExpression,
    planTagInstanceAdjustment,
    sortTagInstancesByTagThenMode,
    sortTagsByName,
    sortTagsByRoleThenName
};
