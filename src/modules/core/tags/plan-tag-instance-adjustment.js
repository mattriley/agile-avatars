export default () => (tags, modeCounts) => {

    return tags.flatMap(tag => {
        return Object.entries(modeCounts).flatMap(([mode, count]) => {
            return plan({ tag, mode, count });
        });
    });

};

const plan = ({ tag, mode, count }) => {
    const diff = count - tag[mode].length;

    const planInsert = () => {
        return { insert: Array(diff).fill({ tagId: tag.id, mode }) };
    };

    const planRemove = () => {
        return { remove: tag[mode].slice(diff) };
    };

    return diff ? (diff > 0 ? planInsert() : planRemove()) : {};
};
